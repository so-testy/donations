import { createContext } from 'react';

const NavigationContext = createContext({
    views: {},
    activeView: '',
    setActiveView: () => {},
});

export default NavigationContext;
