import React, { useCallback, useContext, useState } from 'react';

import { PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';
import useNavigate from '../../hooks/useNavigate';
import BaseCreateDonationForm from '../forms/BaseCreateDonationForm';

const CreateDonationFormView = () => {
    const { views } = useContext(NavigationContext);

    const { navigate: goToChooseDonationsPage } = useNavigate(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack onClick={goToChooseDonationsPage} />}
            >
                Целевой сбор
            </PanelHeader>
            <BaseCreateDonationForm />
        </>
    );
};

export default CreateDonationFormView;
