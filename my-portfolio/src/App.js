import React from 'react'

import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'

import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
