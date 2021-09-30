import React, { Component }  from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <Main />

        <header className="App-header">
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
          
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Services />
          <About />
          <Contact />

        </header>
      </BrowserRouter>

    </div>
  );
}

export default App;
