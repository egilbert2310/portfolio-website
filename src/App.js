import './App.css';
import MainHeader from './components/main_header.component';
import Nav from './components/nav.component';
import About from './components/about.component';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainHeader jobtitle={"Data Engineer"}/>
      <About/>
    </div>
  );
}

export default App;