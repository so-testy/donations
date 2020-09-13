import { useContext, useCallback } from 'react';

import NavigationContext from '../NavigationContext';

const useNavigate = (view, panel) => {
    const { setActiveView, setActivePanel } = useContext(NavigationContext);

    const navigationCallback = useCallback(() => {
        setActiveView(view);
        setActivePanel(panel);
    }, [setActiveView, setActivePanel, view, panel]);

    return { navigate: navigationCallback };
};

export default useNavigate;
