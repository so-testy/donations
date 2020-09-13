import React, { useState } from 'react';

import { Root, View, Panel } from '@vkontakte/vkui';

import NavigationContext from './NavigationContext';
import DonationsPageView from './components/views/DonationsPageView';
import CreateDonationView from './components/views/CreateDonationView';
import DonationInFeedView from './components/views/DonationInFeedView';
import PublishDonationToFeedView from './components/views/PublishDonationToFeedView';

function App() {
    // TODO: return to donations
    const [activeView, setActiveView] = useState('publish-donation-to-feed');

    const views = {
        donations: 'donations',
        createDonation: 'create-donation',
        donationInFeed: 'donation-in-feed',
        publishDonationToFeed: 'publish-donation-to-feed'
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
                <View
                    id={views.donationInFeed}
                    activePanel="donations-in-feed-page"
                >
                    <Panel id="donations-in-feed-page">
                        <DonationInFeedView />
                    </Panel>
                </View>
                <View
                    id={views.publishDonationToFeed}
                    activePanel="publish-donation-to-feed-page"
                >
                    <Panel id="publish-donation-to-feed-page">
                        <PublishDonationToFeedView />
                    </Panel>
                </View>
            </Root>
        </NavigationContext.Provider>
    );
}

export default App;
