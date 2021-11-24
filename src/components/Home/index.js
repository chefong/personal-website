import { Fragment } from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Title from './Title';
import Container from '~/components/Container';

export default function Home() {
    return (
        <Container>
            {(aboutSectionEl, projectsSectionEl, experiencesSectionEl) => (
                <Fragment>
                    <Title />
                    <About ref={aboutSectionEl} />
                    <Projects ref={projectsSectionEl} />
                    <Experience ref={experiencesSectionEl} />
                </Fragment>
            )}
        </Container>
    );
}
