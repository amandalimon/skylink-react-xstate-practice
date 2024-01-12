import React from 'react';
import './Search.css'

function Search({ state, send }) {
    const [flight, setFlight] = React.useState("");

    const handleSelectChange = (e) => {
        setFlight(e.target.value);
    };

    const goToPassengers = () => {
        send({
            type: "CONTINUE",
            selectedCountry: flight,
        });
    };

    const options = state.context.countries;

    return (
        <div className='Search'>
            <p className='Search-title title'>Busca tu destino</p>

            <select
                id="country"
                className='Search-select'
                value={flight}
                onChange={handleSelectChange}
            >
                <option value="" disabled defaultValue>
                    Select a country
                </option>

                {options.map((option) =>
                    <option value={option.name.common} key={option.name.common}>
                        {option.name.common}
                    </option>)}
            </select>

            <button onClick={goToPassengers} disabled={flight === ''} className='Search-continue button'>
                Continuar
            </button>
        </div>
    )
}

export { Search }