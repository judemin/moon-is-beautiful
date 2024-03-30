// src/App.js
import React from 'react';
import ImageComponent from './ImageComponent';
import DropdownComponent from './DropdownComponent';

function App() {
  return (
    <div style={{ backgroundColor: '#39293c', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      {/* <ImageComponent /> */}
      <DropdownComponent />
    </div>
  );
}

export default App;