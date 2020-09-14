import { createContext } from 'react';

const NavigationContext = createContext({
    views: {},
    activeView: '',
    activePanel: '',
    setActiveNavigation: () => { },
});

export default NavigationContext;
