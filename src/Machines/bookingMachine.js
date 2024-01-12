import { createMachine, assign, fromPromise } from "xstate";
import { fetchCountries } from "../Utils/api";

const fillCountries = {
    initial: "loading",
    states: {
        loading: {
            invoke: {
                id: "getCountries",
                src: fromPromise(() => fetchCountries()),
                onDone: {
                    target: "success",
                    actions: assign({
                        countries: ({ event }) => event.output
                    })
                }
            },
            onError: {
                target: "failure",
                actions: assign({
                    error: "Fallo en el request",
                }),
            }
        },
        success: {},
        failue: {
            on: {
                RETRY: {
                    target: "loading"
                },
            },
        },
    },
};

const bookingMachine = createMachine(
    {
        id: "buy plane tickets",
        initial: "initial",
        context: {
            originCountry: "",
            destinationCountry: "",
            departureDate: null,
            returnDate: null,
            passengers: [],
            countries: [],
            error: "",
        },
        states: {
            initial: {
                on: {
                    START: "search",
                },
            },
            search: {
                on: {
                    CONTINUE: {
                        target: "passengers",
                        actions: assign({
                            originCountry: ({ event }) => event.originCountry,
                            destinationCountry: ({ event }) => event.destinationCountry,
                            departureDate: ({ event }) => event.departureDate,
                            returnDate: ({ event }) => event.returnDate,
                        }),
                    },
                    CANCEL: "initial",
                },
                ...fillCountries,
            },
            passengers: {
                on: {
                    DONE: {
                        target: "tickets",
                        guard: "passengersMinLength",
                    },
                    CANCEL: {
                        target: "initial",
                        actions: "cleanContext",
                    },
                    ADD: {
                        target: "passengers",
                        actions: assign({
                            passengers: ({ context, event }) => [...context.passengers, event.newPassenger],
                        }),
                    }
                },
            },
            tickets: {
                after: {
                    6000: {
                        target: "initial",
                        actions: "cleanContext",
                    }
                },
                on: {
                    FINISH: {
                        target: "initial",
                        actions: "cleanContext"
                    }
                },
            },
        },
    },
    {
        actions: {
            cleanContext: assign(({ context }) => {
                context.passengers = [];
                context.originCountry = "";
                context.destinationCountry = "";
                return context;
            }),
        },
        guards: {
            passengersMinLength: ({ context }) => {
                return context.passengers.length > 0;
            },
        },
    },
);

export { bookingMachine }