import React, { useContext } from 'react';

import { PanelHeader, PanelHeaderButton } from '@vkontakte/vkui';
import { Div } from '@vkontakte/vkui';
import { Button } from '@vkontakte/vkui';
import { Headline } from '@vkontakte/vkui';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';

import useNavigation from '../../hooks/useNavigation';

import NavigationContext from '../../NavigationContext';
import StorageContext from '../../StorageContext';

const styles = {
    headline: {
        color: '#818C99',
    },
};

const DonationsPageView = () => {
    const { views } = useContext(NavigationContext);
    const {
        state: { donationList },
    } = useContext(StorageContext);

    const { navigate: goToCreateDonationPage } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <PanelHeader
                right={
                    donationList && (
                        <PanelHeaderButton onClick={goToCreateDonationPage}>
                            <Icon24AddOutline />
                        </PanelHeaderButton>
                    )
                }
            >
                Пожертвования
            </PanelHeader>
            <Div style={{ textAlign: 'center' }}>
                {donationList ? (
                    'asdas'
                ) : (
                    <>
                        <Headline weight="regular" style={styles.headline}>
                            У вас пока нет сборов.
                        </Headline>
                        <Headline
                            weight="regular"
                            style={{ marginBottom: 16, ...styles.headline }}
                        >
                            Начните доброе дело.
                        </Headline>
                        <Button onClick={goToCreateDonationPage}>
                            Создать сбор
                        </Button>
                    </>
                )}
            </Div>
        </>
    );
};

export default DonationsPageView;
