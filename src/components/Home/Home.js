import { useContext } from 'react';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Title from './Title/Title';
import Container from '../Container/Container';

export default function Home() {
  return (
    <Container>
      <Title />
      <About />
      <Projects />
      <Experience />
    </Container>
  );
}
