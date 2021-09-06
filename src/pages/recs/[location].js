import { useRouter } from 'next/router';
import Head from 'next/head';
import FullScreenPage from '~/components/Page/FullScreenPage';
import Location from '~/components/Location';
import locationData from './data.json';

const LocationPage = () => {
  const { query } = useRouter();
  const { location } = query;

  if (!location) return null;

  const { name, locations } = locationData[location] || {};
  if (!name) return null;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{`Eric's ${name} Recommendations`}</title>
      </Head>
      <FullScreenPage>
        <Location location={name} locations={locations} />
      </FullScreenPage>
    </>
  );
};

export default LocationPage;
