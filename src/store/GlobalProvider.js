import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import makeInitialState from './makeInitialState';
import reducer from './reducer';

const store = createContext({});
const { Provider } = store;

function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, makeInitialState());

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export { store, GlobalProvider };

GlobalProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
