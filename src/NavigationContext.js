import { createContext } from 'react';

const NavigationContext = createContext({
    views: {},
    activeView: '',
    setActiveView: () => {},
    setActivePanel: () => {},
});

export default NavigationContext;
