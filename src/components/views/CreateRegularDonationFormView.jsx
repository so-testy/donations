import React, { useCallback, useContext, useState } from 'react';

import { FormLayoutGroup } from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';
import useNavigate from '../../hooks/useNavigate';
import BaseCreateDonationForm from '../forms/BaseCreateDonationForm';
import SelectAuthorField from '../ui/SelectAuthorField';
import FormStepper from '../forms/FormStepper/FormStepper';
import FormStep from '../forms/FormStepper/FormStep';

const CreateRegularDonationFormView = () => {
    const { views } = useContext(NavigationContext);

    const { navigate: goToChooseDonationsPage } = useNavigate(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <FormStepper
                onBack={goToChooseDonationsPage}
                viewId="donation-form"
            >
                <FormStep title="Регулярный сбор">
                    <BaseCreateDonationForm t={{ amount: 'Сумма в месяц, ₽' }}>
                        <FormLayoutGroup top="Автор">
                            <SelectAuthorField />
                        </FormLayoutGroup>
                    </BaseCreateDonationForm>
                </FormStep>
            </FormStepper>
        </>
    );
};

export default CreateRegularDonationFormView;
