export const logPageViewToGA = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const logToGA = ({ action, params }) => {
  window.gtag('event', action, params);
};
