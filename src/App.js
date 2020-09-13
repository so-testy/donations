import React, { useState } from 'react';

import { Root, View, Panel } from '@vkontakte/vkui';

import NavigationContext from './NavigationContext';

import DonationsPageView from './components/views/DonationsPageView';

import CreateDonationView from './components/views/ChooseDonationView';
import CreateDonationFormView from './components/views/CreateDonationFormView';
import CreateRegularDonationFormView from './components/views/CreateRegularDonationFormView';

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

    return (
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
                    <Panel id={views.donations.panels.donationsPage} centered>
                        <DonationsPageView />
                    </Panel>
                </View>
                <View id={views.createDonation.name} activePanel={activePanel}>
                    <Panel
                        id={views.createDonation.panels.chooseDonationPage}
                        centered
                    >
                        <CreateDonationView />
                    </Panel>
                    <Panel id={views.createDonation.panels.createDonationPage}>
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
    );
}

export default App;
