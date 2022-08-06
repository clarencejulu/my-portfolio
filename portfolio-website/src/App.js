import React from 'react';
import './css/App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import {Menu} from './components/Menu';
import {Portfolio} from './components/Portfolio';
import {Contact} from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Router>
          <div className='body'>
            <Header />
            <Menu />
            <Routes>
              <Route exact path="/"/>
              <Route exact path="/portfolio" element={<Portfolio />}/>
              <Route exact path="/contact-me" element={<Contact />}/>
            </Routes>
          </div>
          <Footer />
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
