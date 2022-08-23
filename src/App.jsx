import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Footer from './common/Footer/Footer';
import BuildingTable from './common/BuildingTable/BuildingTable';
import ButtonAppBar from './common/AppBar/ButtonAppBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code> src/App.js </code>
          and save to reload.
        </p>
      </header> */}

      <ButtonAppBar />
      <div>
        <BuildingTable />
      </div>
      <Footer name="Allen Wu" />
    </div>
  );
}

export default App;
