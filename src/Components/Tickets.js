import React from 'react';
import './Tickets.css';

function Tickets({ send, context }) {
  const finish = () => {
    send({ type: "FINISH" });
  }

  const departureDate = context.departureDate;
  const returnDate = context.returnDate;

  return (
    <div className='Tickets'>
      <p className='Tickets text'>
        Thanks for travelling with SkyLink! <br />The details of your order are indicated below.</p>

      <p className='Tickets-p'>Guest Name</p>
      {context.passengers.map(
        (person, idx) => {
          return <p className='Ticket-passenger' key={idx}>{person}</p>
        }
      )}

      <div className='Flight-details'>
        <div className='route'>
          <h1>Flight Details</h1><p>Route</p>
        </div>
        <span className='from'>From<p className='Flight-details p'>
          {context.originCountry}</p>
        </span>
        <span className='to'>To<p className='Flight-details p'>
          {context.destinationCountry}</p>
        </span>
        <span className='departure-date'>Departure Date
          <p className='Flight-details p'>
            {departureDate ? departureDate.toLocaleString() : "Not selected"}
          </p>
        </span>
        <span className='arrival-date'>Return Date
          <p>
            {returnDate ? returnDate.toLocaleString() : "Not selected"}
          </p>
        </span>
        <span className='departure-terminal'>Departure Terminal<p className='Flight-details p'>Terminal 1</p> </span>
        <span className='arrival-terminal'>Arrival terminal<p className='Flight-details p'>Terminal 5</p></span>
      </div>

      <div className='button-container'>
        <button className='Tickets-finalizar button' onClick={finish}>
          Finish
        </button>
      </div>
    </div >
  );
};

export { Tickets }