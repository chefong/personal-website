import { useContext } from 'react';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Title from './Title/Title';
import Body from '../Body/Body';

export default function Home() {
  return (
    <Body>
      <Title />
      <About />
      <Projects />
      <Experience />
    </Body>
  );
}
