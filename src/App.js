import React from 'react';
import { useMachine } from '@xstate/react';
import { bookingMachine } from './Machines/bookingMachine'
import { StepsLayout } from './Containers/StepsLayout';
import { Nav } from './Components/Nav';
import { Welcome } from './Components/Welcome';
import { Search } from './Components/Search';
import { Passengers } from './Components/Passengers';
import { Tickets } from './Components/Tickets';
import './App.css';

function App() {
  const [state, send] = useMachine(bookingMachine);

  console.log('máquina de estados:', state.value, state.context)
  
  return (
    <section className='App'>
      <Nav state={state} send={send} />
      <StepsLayout
        send={send}
        state={state}
        onWelcome={(send) => <Welcome send={send} />}
        onSearch={(send) => <Search send={send} state={state} />}
        onPassengers={(send) => <Passengers send={send} state={state}/>}
        onTickets={(send) => <Tickets send={send} context={state.context}/>}
      />
    </section>
  );
}

export default App;
