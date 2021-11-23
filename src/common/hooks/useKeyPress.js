import { useEffect } from 'react';

function useKeyPress(key, action) {
    useEffect(() => {
        const onKeyup = (e) => {
            if (e.key === key) action();
        };
        window.addEventListener('keyup', onKeyup);

        return () => window.removeEventListener('keyup', onKeyup);
    }, []);
}

export default useKeyPress;
