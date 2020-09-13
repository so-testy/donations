import React, { useContext, useEffect, useState } from 'react';

import { PanelHeader, PanelHeaderButton, Textarea } from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';
import useNavigation from '../../hooks/useNavigation';

import IconUp from '@vkontakte/icons/dist/16/up';
import IconDismiss from '@vkontakte/icons/dist/24/dismiss';

import DonationPost from '../Common/DonationPost';
import StorageContext from '../../StorageContext';

const PublishDonationToFeedView = () => {
    const { state, setState } = useContext(StorageContext);
    const { views } = useContext(NavigationContext);

    const [donation, setDonation] = useState({});
    const [message, setMessage] = useState(
        'Сейчас самое время помочь тем, кто не может попросить о помощи сам.',
    );

    useEffect(() => {
        state.donationList && setDonation(state.donationList[0]);
    }, [state, setDonation]);

    const { navigate: goToFeed } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.donationInFeed,
    );

    return (
        <>
            <PanelHeader
                left={
                    <PanelHeaderButton onClick={() => {}}>
                        <IconDismiss fill={'var(--text_secondary)'} />
                    </PanelHeaderButton>
                }
                right={
                    <PanelHeaderButton
                        onClick={goToFeed}
                        style={{ marginRight: 10 }}
                    >
                        <IconUp
                            style={{
                                background: 'var(--button_primary_background)',
                                borderRadius: '50%',
                                padding: 4,
                            }}
                            fill={'#ffffff'}
                        />
                    </PanelHeaderButton>
                }
            >
                Матвей
            </PanelHeader>
            <Textarea
                style={{
                    margin: '5px 10px',
                }}
                getRef={textarea => {
                    if (textarea) {
                        textarea.style.background = '#ffffff';
                        textarea.style.minHeight = '64px';
                    }
                }}
                onChange={e => setMessage(e.target.value)}
                placeholder="Введите текст поста"
                value={message}
            />
            <DonationPost
                disabled={true}
                clickHandler={goToFeed}
                progressPercent={0}
                progressTitle={'Помоги первым'}
                userMessage={donation.message}
                title={donation.donationName}
                author={'Матвей Правосудов'}
                date={new Date(donation.payDate)}
                isSubscribe={donation.isSubscribe}
                image={'/shelter.jpg'}
                isHiddenAuthor={true}
                isHiddenAuthorMessage={true}
            />
        </>
    );
};

export default PublishDonationToFeedView;
