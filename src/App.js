import React, { useState, useEffect } from 'react';

import { Root, View, Panel } from '@vkontakte/vkui';
import merge from 'deepmerge';

import NavigationContext from './NavigationContext';

import DonationsPageView from './components/views/DonationsPageView';

import CreateDonationView from './components/views/ChooseDonationView';
import CreateDonationFormView from './components/views/CreateDonationFormView';
import CreateRegularDonationFormView from './components/views/CreateRegularDonationFormView';
import StorageContext from './StorageContext';

import DonationInFeedView from './components/views/DonationInFeedView';

import PublishDonationToFeedView from './components/views/PublishDonationToFeedView';

import DonationDescriptionView from './components/views/DonationDescriptionView';

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
            donationInFeed: 'donation-in-feed',
            donationDescription: 'donation-description',
            publishDonationToFeed: 'publish-donation-to-feed',
        },
    },
};

function App() {
    const [
        { view: activeView, panel: activePanel },
        setActiveNavigation,
    ] = useState({
        view: views.donations.name,
        panel: views.donations.panels.donationsPage,
    });

    const [appState, setAppState] = useState({});

    useEffect(() => {
        const state = localStorage.getItem('appState');
        setAppState(JSON.parse(state) || {});
    }, []);

    const setLocalStorageState = newState => {
        const state = merge(appState, newState);

        localStorage.setItem('appState', JSON.stringify(state));
        setAppState(state);
    };

    return (
        <StorageContext.Provider
            value={{ state: appState, setState: setLocalStorageState }}
        >
            <NavigationContext.Provider
                value={{
                    views,
                    activeView,
                    setActiveNavigation,
                }}
            >
                <Root activeView={activeView}>
                    <View id={views.donations.name} activePanel={activePanel}>
                        <Panel
                            id={views.donations.panels.donationsPage}
                            centered={!appState.donationList}
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
                        <Panel
                            id={
                                views.createDonation.panels
                                    .publishDonationToFeed
                            }
                        >
                            <PublishDonationToFeedView />
                        </Panel>
                        <Panel
                            id={
                                views.createDonation.panels
                                    .donationInFeed
                            }
                        >
                            <DonationInFeedView />
                        </Panel>
                        <Panel
                            id={
                                views.createDonation.panels
                                    .donationDescription
                            }
                        >
                            <DonationDescriptionView />
                        </Panel>
                    </View>
                </Root>
            </NavigationContext.Provider>
        </StorageContext.Provider>
    );
}

export default App;
