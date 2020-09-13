import React, { useState } from 'react';

import { Root, View, Panel } from '@vkontakte/vkui';

import NavigationContext from './NavigationContext';
import DonationsPageView from './components/views/DonationsPageView';
import CreateDonationView from './components/views/CreateDonationView';

function App() {
    const [activeView, setActiveView] = useState('create-donation');

    const views = {
        donations: 'donations',
        createDonation: 'create-donation',
    };

    return (
        <NavigationContext.Provider
            value={{
                views,
                activeView,
                setActiveView,
            }}
        >
            <Root activeView={activeView}>
                <View id={views.donations} activePanel="donations-page">
                    <Panel id="donations-page" centered>
                        <DonationsPageView />
                    </Panel>
                </View>
                <View
                    id={views.createDonation}
                    activePanel="create-donation-page"
                >
                    <Panel id="create-donation-page" centered>
                        <CreateDonationView />
                    </Panel>
                </View>
            </Root>
        </NavigationContext.Provider>
    );
}

export default App;
