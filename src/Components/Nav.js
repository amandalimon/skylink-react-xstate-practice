import React from 'react'
import './Nav.css'

function Nav({ state, send }) {
    const goToWelcome = () => {
        send({ type: "CANCEL" });
    }

    return (
        <nav className='Nav'>
            <h1 className='Nav-logo'>
            ✈️SkyLink
            </h1>
            {!state.matches('initial') && !state.matches('tickets') &&
                <button onClick={goToWelcome}
                    className='Nav-cancel button-secondary'>
                    Go back
                </button>

            }
        </nav>
    )
}

export { Nav }