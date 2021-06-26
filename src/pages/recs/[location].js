import { useRouter } from 'next/router';
import styles from './location.module.scss';
import Container from '../../components/Container/Container';

export default function Location() {
  const { query } = useRouter();
  const { location } = query;

  return (
    <Container>
      <div className={styles.locationContainer}>Location: {location} </div>
    </Container>
  );
}
