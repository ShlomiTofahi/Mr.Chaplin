import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Social from './components/Social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <Social />
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
          {/* <img width='100%' height='700px'  src='/images/bgLogo.jpg' alt='לוגו' /> */}
        </header>
      {/* <div style={bgStyle} className="">
      </div> */}
      </BrowserRouter>
          {/* <section style={{ backgroundImage: `url(/images/home/cover3.jpg)` }} class="main-box elementor-section elementor-top-section elementor-element elementor-element-f51a8f9 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="f51a8f9" data-element_type="section">
</section> */}

    </div>
  );
}

const bgStyle = {
  backgroundImage: `url(/images/bgLogo.jpg)`,
  height: '500px',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  // filter: 'blur(4px)',
  width: "100%",
  // height: "100vh",
}

export default App;
