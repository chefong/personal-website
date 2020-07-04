import React from 'react';
import Title from './Title/Title';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
// import Experience from './Experience/Experience';

function Home() {
  return (
    <div className="Home">
      <Title/>
      <About/>
      <Skills/>
      <Projects/>
      {/* <Experience/> */}
    </div>
  )
}

export default Home;