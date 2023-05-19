import './App.css';
import MainHeader from './components/main_header.component';
import Nav from './components/nav.component';
import About from './components/about.component';
import Project from './components/project.component';
import { useState } from 'react';
import ProjectTitle from './components/project_title.component';
import TestImage from './test-image.jpg'
import ContactForm from './components/contact.component';

function App() {
  return (
    <>
      <div className="App">
        <Nav/>
        <MainHeader jobtitle={"Data Engineer"}/>
        <About/>
        <ProjectTitle/>
        <div className='project-container'>
          <div className='project-grid'>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
            <Project img={TestImage} title ={"test"} desc={"test"}/>
          </div>
        </div>
        <ContactForm/>
      </div>
    </>
  )
}

export default App;