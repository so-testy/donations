import { useContext, useCallback } from 'react';

import NavigationContext from '../NavigationContext';

const useNavigation = (view, panel) => {
    const { setActiveNavigation } = useContext(NavigationContext);

    const navigationCallback = useCallback(() => {
        setActiveNavigation({ view, panel });
    }, [setActiveNavigation, view, panel]);

    return { navigate: navigationCallback };
};

export default useNavigation;
