import React, { useCallback, useContext } from 'react';

import { PanelHeader } from '@vkontakte/vkui';
import { Div } from '@vkontakte/vkui';
import { Button } from '@vkontakte/vkui';
import { Headline } from '@vkontakte/vkui';

import useNavigation from '../../hooks/useNavigation';

import NavigationContext from '../../NavigationContext';

const styles = {
    headline: {
        color: '#818C99',
    },
};

const DonationsPageView = () => {
    const { views } = useContext(NavigationContext);

    const { navigate: goToCreateDonationPage } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <PanelHeader>Пожертвования</PanelHeader>
            <Div style={{ textAlign: 'center' }}>
                <Headline weight="regular" style={styles.headline}>
                    У вас пока нет сборов.
                </Headline>
                <Headline
                    weight="regular"
                    style={{ marginBottom: 16, ...styles.headline }}
                >
                    Начните доброе дело.
                </Headline>
                <Button onClick={goToCreateDonationPage}>Создать сбор</Button>
            </Div>
        </>
    );
};

export default DonationsPageView;
