import { createContext } from 'react';

const StorageContext = createContext({
    state: {},
    setState: state => {
        localStorage.setItem('appState', JSON.stringify());
    },
});

export default StorageContext;
