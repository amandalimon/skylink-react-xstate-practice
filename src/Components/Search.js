import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Search.css'

function Search({ state, send }) {
    const [originFlight, setOriginFlight] = React.useState('');
    const [destinationFlight, setDestinationFlight] = React.useState('');

    const handleOriginSelectChange = (e) => {
        setOriginFlight(e.target.value);
    };

    const handleDestinationSelectChange = (e) => {
        setDestinationFlight(e.target.value);
    };

    const [departureDate, setDepartureDate] = React.useState(new Date());
    const [returnDate, setReturnDate] = React.useState(new Date());

    const handleDepartureDate = (selectedDate) => {
        setDepartureDate(selectedDate);
    }

    const handleReturnDate = (selectedDate) => {
        setReturnDate(selectedDate);
    };

    const goToPassengers = () => {
        send({
            type: "CONTINUE",
            originCountry: originFlight,
            destinationCountry: destinationFlight,
            departureDate: departureDate,
            returnDate: returnDate,
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
                        onChange={handleDepartureDate}
                        minDate={new Date()}
                    />
                </seccion>
                <seccion>
                    <p className='Calendar-title'>Return</p>
                    <DatePicker
                        className='Calendar-date'
                        selected={returnDate}
                        onChange={handleReturnDate}
                        minDate={departureDate}
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