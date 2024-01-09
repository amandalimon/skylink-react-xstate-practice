import React from 'react';
import './StepsLayout.css'

function StepsLayout({
    onWelcome,
    onSearch,
    onPassengers,
    onTickets,
    state,
    send 
}) {

    return (
        <div className='StepsLayout'>
            {state.matches('initial') && onWelcome(send)}
            {state.matches('search') && onSearch(send)}
            {state.matches('passengers') && onPassengers(send)}
            {state.matches('tickets') && onTickets(send)}
        </div>
    )
}

export { StepsLayout }