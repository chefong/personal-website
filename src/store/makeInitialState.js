export default function makeInitialState() {
  let siteTheme;
  if (process.browser) siteTheme = localStorage.getItem('siteTheme');

  const initialState = {
    theme: null,
  };

  return initialState;
}
