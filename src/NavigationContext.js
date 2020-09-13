import { createContext } from 'react';

const NavigationContext = createContext({
    views: {},
    activeView: '',
    setActiveNavigation: () => {},
});

export default NavigationContext;
