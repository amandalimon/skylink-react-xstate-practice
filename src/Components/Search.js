import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Search.css'

function Search({ state, send }) {
    const [originFlight, setOriginFlight] = React.useState('');
    const [destinationFlight, setDestinationFlight] = React.useState('');

    const [departureDate, setDepartureDate] = React.useState(new Date());
    const [returnDate, setReturnDate] = React.useState(new Date());

    const handleOriginSelectChange = (e) => {
        setOriginFlight(e.target.value);
    };

    const handleDestinationSelectChange = (e) => {
        setDestinationFlight(e.target.value);
    };

    const goToPassengers = () => {
        send({
            type: "CONTINUE",
            originCountry: originFlight,
            destinationCountry: destinationFlight,
        });
    };

    const options = state.context.countries;

    return (
        <div className='Search'>

            <p className='Search-title title'>Origin</p>
            <select
                id="country-origin"
                className='Search-select'
                value={originFlight}
                onChange={handleOriginSelectChange}
            >
                <option value='' disabled defaultValue>
                    Where are you travelling from?
                </option>

                {options.map((option) =>
                    <option value={option.name.common} key={option.name.common}>
                        {option.name.common}
                    </option>)}
            </select>

            <p className='Search-title title'>Destination</p>
            <select
                id="country-destination"
                className='Search-select'
                value={destinationFlight}
                onChange={handleDestinationSelectChange}
            >
                <option value="" disabled defaultValue>
                    Select your destination
                </option>

                {options.map((option) =>
                    <option value={option.name.common} key={option.name.common}>
                        {option.name.common}
                    </option>)}
            </select>

            <div className='Calendars-container'>
                <seccion>
                    <p className='Calendar-title'>Departure</p>
                    <DatePicker
                        className='Calendar-date'
                        selected={departureDate}
                        minDate={new Date()}
                        onChange={
                            (departureDate) => setDepartureDate(departureDate)
                        }
                    />
                </seccion>
                <seccion>
                    <p className='Calendar-title'>Return</p>
                    <DatePicker
                        className='Calendar-date'
                        selected={returnDate}
                        minDate={departureDate}
                        onChange={
                            (returnDate) => setReturnDate(returnDate)
                        }
                    />
                </seccion>
            </div>

            <button onClick={goToPassengers} disabled={originFlight === ''} className='Search-continue button'>
                Continue
            </button>
        </div>
    )
}

export { Search }