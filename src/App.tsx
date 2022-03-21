import React from "react";

import { Button, ButtonWithArrow } from "./components/UI/Buttons";

const App: React.FC = () => {
  return (
    <div className="App" style={{
      display: 'grid',
      justifyItems: 'center',
      alignContent: 'center',
      rowGap: '10px',
      minHeight: '100vh'
    }}>
      <Button variant="btn__secondary" text="Start for free" />

      <ButtonWithArrow 
        variant="btn__primary" 
        text="Start for free"
        otherClasses={['btn__with-arrow']} />
    </div>
  );
}

export default App;
