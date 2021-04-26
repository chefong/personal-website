import { createContext, useContext, useReducer } from 'react';
import makeInitialState from './makeInitialState';
import reducer from './reducer';

const store = createContext({});
const { Provider } = store;

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, makeInitialState());

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, GlobalProvider };
