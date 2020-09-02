import React from 'react';
import './App.css';
import Content from './content/Content'
import Footer from './footer/Footer'
import Navigation from './navigation/navigation'
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  
  return (
    <Router>
        <Navigation/>
        <Content/>
        <Footer/>
    </Router>
  );
}

export default App;
