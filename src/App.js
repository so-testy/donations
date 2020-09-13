import React, { useState, useEffect } from 'react';

import { Root, View, Panel } from '@vkontakte/vkui';
import merge from 'deepmerge';

import NavigationContext from './NavigationContext';

import DonationsPageView from './components/views/DonationsPageView';

import CreateDonationView from './components/views/ChooseDonationView';
import CreateDonationFormView from './components/views/CreateDonationFormView';
import CreateRegularDonationFormView from './components/views/CreateRegularDonationFormView';
import StorageContext from './StorageContext';

const views = {
    donations: {
        name: 'donations',
        panels: {
            donationsPage: 'donations-page',
        },
    },
    createDonation: {
        name: 'create-donation',
        panels: {
            chooseDonationPage: 'choose-donation-page',
            createDonationPage: 'create-donation-page',
            createRegularDonationPage: 'create-regular-donation-page',
        },
    },
};

function App() {
    const [activeView, setActiveView] = useState(views.createDonation.name);
    const [activePanel, setActivePanel] = useState(
        views.createDonation.panels.chooseDonationPage,
    );

    const [appState, setAppState] = useState({});

    useEffect(() => {
        const state = localStorage.getItem('appState');
        setAppState(JSON.parse(state) || {});
    }, [JSON.stringify(appState), setAppState]);

    const setLocalStorageState = newState => {
        const state = merge(appState, newState);

        localStorage.setItem('appState', JSON.stringify(state));
        setAppState(state);
    };

    console.log(appState);

    return (
        <StorageContext.Provider
            value={{ state: appState, setState: setLocalStorageState }}
        >
            <NavigationContext.Provider
                value={{
                    views,
                    activeView,
                    setActiveView,
                    setActivePanel,
                }}
            >
                <Root activeView={activeView}>
                    <View id={views.donations.name} activePanel={activePanel}>
                        <Panel
                            id={views.donations.panels.donationsPage}
                            centered
                        >
                            <DonationsPageView />
                        </Panel>
                    </View>
                    <View
                        id={views.createDonation.name}
                        activePanel={activePanel}
                    >
                        <Panel
                            id={views.createDonation.panels.chooseDonationPage}
                            centered
                        >
                            <CreateDonationView />
                        </Panel>
                        <Panel
                            id={views.createDonation.panels.createDonationPage}
                        >
                            <CreateDonationFormView />
                        </Panel>
                        <Panel
                            id={
                                views.createDonation.panels
                                    .createRegularDonationPage
                            }
                        >
                            <CreateRegularDonationFormView />
                        </Panel>
                    </View>
                </Root>
            </NavigationContext.Provider>
        </StorageContext.Provider>
    );
}

export default App;
