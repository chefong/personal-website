export const logPageViewToGA = (url) => {
    window.gtag('config', process.env.GA_TRACKING_ID, {
        page_path: url,
    });
};

export const logToGA = ({ action, params }) => {
    window.gtag('event', action, params);
};
