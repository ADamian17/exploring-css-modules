import React from 'react';

import { Button } from 'ad-bulma-react';

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        rowGap: '10px',
        minHeight: '100vh',
      }}
    >
      <div className='buttons'>
      <Button variant='is-danger'>my button</Button>
      <Button variant='is-success'>my button</Button>
      <Button variant='is-info'>my button</Button>
      <Button variant='is-dark'>my button</Button>
      <Button variant='is-ghost'>my button</Button>
      <Button variant='is-warning'>my button</Button>
      <Button variant='is-primary'>my button</Button>
      </div>
    </div>
  );
};

export default App;
