import React from 'react';
import './Welcome.css';

function Welcome({ send }) {
    const startBooking = () => {
        send({ type: "START" });
    }

    return (
        <div>
            <p className='Welcome'>
                ¡Hello! Welcome to your gateway to the world!
            </p>
            <p className='Welcome-title'>
                Explore exciting destinations, embark on unforgettable adventures, and make your travel dreams a reality with our platform. Are you ready to begin your adventure?
            </p>
            <button onClick={startBooking} className='Welcome-cancel button'>
                Let's go!
            </button>
        </div>
    )
}

export { Welcome }