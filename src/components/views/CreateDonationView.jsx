import React, { useCallback, useContext } from 'react';

import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';

const CreateDonationView = () => {
    const { setActiveView, views } = useContext(NavigationContext);

    const goToDonationsPage = useCallback(
        () => setActiveView(views.donations),
        [setActiveView, views],
    );

    return (
        <>
            <PanelHeader left={<PanelHeaderBack onClick={goToDonationsPage} />}>
                Тип сбора
            </PanelHeader>
        </>
    );
};

export default CreateDonationView;
