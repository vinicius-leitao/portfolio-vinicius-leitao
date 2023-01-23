import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from './components/Header'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer'

import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/projetos' element={<ProjectsPage/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
