import React, { useCallback, useContext, useState } from 'react';

import {
    PanelHeader,
    PanelHeaderBack,
    FormLayoutGroup,
    Select,
} from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';
import useNavigate from '../../hooks/useNavigate';
import BaseCreateDonationForm from '../forms/BaseCreateDonationForm';
import SelectAuthorField from '../ui/SelectAuthorField';

const CreateRegularDonationFormView = () => {
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
                Регулярный сбор
            </PanelHeader>
            <BaseCreateDonationForm t={{ amount: 'Сумма в месяц, ₽' }}>
                <FormLayoutGroup top="Куда получать деньги">
                    <SelectAuthorField />
                </FormLayoutGroup>
            </BaseCreateDonationForm>
        </>
    );
};

export default CreateRegularDonationFormView;
