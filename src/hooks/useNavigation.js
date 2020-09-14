import { useContext, useCallback } from 'react';

import NavigationContext from '../NavigationContext';

const useNavigation = (view, panel) => {
    const { setActiveNavigation, activeView, activePanel } = useContext(NavigationContext);

    const navigationCallback = useCallback(() => {
        setActiveNavigation({ view: view || activeView, panel: panel || activePanel });
    }, [setActiveNavigation, view, panel]);

    return { navigate: navigationCallback };
};

export default useNavigation;
