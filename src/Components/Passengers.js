import React from 'react';
import './Passengers.css';

function Passengers({ state, send }) {
    const [value, changeValue] = React.useState('');
    const { passengers } = state.context;

    const onChangeInput = (e) => {
        changeValue(e.target.value);
    }

    const goToTicket = () => {
        send({
            type: "DONE",
        })
    }

    const submit = (e) => {
        e.preventDefault();
        send({
            type: "ADD",
            newPassenger: value
        })
        changeValue('');
    }


    return (
        <form onSubmit={submit} className='Passengers'>
            <p className='Passengers-title title'>Add passengers</p>

            {passengers?.map((user, idx) =>
                <p className="new-passenger" key={`user-${idx}`}>
                    {user}
                </p>
            )}

            <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter passenger full name"
                required
                value={value}
                onChange={onChangeInput}
            />
            <div className='Passengers-buttons'>
                <button
                    className='Passengers-add button-secondary'
                    type="submit"
                >
                    Agregar Pasajero
                </button>
                <button
                    className={`Passenger-pay button ${passengers.length === 0 ? 'Passenger-disabled' : ''}`}
                    type="button"
                    onClick={goToTicket}
                >
                    Ver mi ticket
                </button>
            </div>
        </form>
    );
};

export { Passengers }