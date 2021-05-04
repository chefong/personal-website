const name = 'Eric Ong';
const description = 'I’m a Software Engineer based in the SF Bay Area with a focus on full-stack web development.';
const url = 'https://www.ericong.me';

export default {
  title: name,
  description,
  openGraph: {
    type: 'website',
    url,
    title: name,
    site_name: name,
    description,
    images: [{ url: `${url}/imgs/og-image.png` }],
  },
};
