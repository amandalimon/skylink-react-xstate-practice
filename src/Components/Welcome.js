import React from 'react';
import './Welcome.css';

function Welcome({ send }) {
    const startBooking = () => {
        send({ type: "START" });
    }

    return (
        <div className='Welcome'>
            <p className='Welcome-p'>
                Welcome to SkyLink, your gateway to a world of extraordinary adventures. We are ready to take your flight dreams to new heights. <br /><br /> Ready to begin the journey?
            </p>

            <button onClick={startBooking} className='Welcome button'>
                Let's go!
            </button>
        </div>
    )
}

export { Welcome }