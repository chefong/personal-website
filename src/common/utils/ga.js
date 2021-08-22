const logToGA = ({ action, params }) => {
  window.gtag('event', action, params);
};

export default logToGA;
