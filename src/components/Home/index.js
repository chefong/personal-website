import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Title from './Title';
import Container from '~/components/Container';

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
