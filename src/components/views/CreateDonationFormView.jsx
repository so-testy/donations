import React, { useContext } from 'react';

import NavigationContext from '../../NavigationContext';
import useNavigation from '../../hooks/useNavigation';
import BaseCreateDonationForm from '../forms/BaseCreateDonationForm';
import FormStepper from '../forms/FormStepper/FormStepper';
import FormStep from '../forms/FormStepper/FormStep';
import TargetDonationAdditionalForm from '../forms/TargetDonationAdditionalForm';

const CreateDonationFormView = () => {
    const { views } = useContext(NavigationContext);

    const { navigate: goToChooseDonationsPage } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <FormStepper
                onBack={goToChooseDonationsPage}
                viewId="regular-donation-form"
            >
                <FormStep title="Целевой сбор">
                    <BaseCreateDonationForm />
                </FormStep>
                <FormStep title="Дополнительно">
                    <TargetDonationAdditionalForm />
                </FormStep>
            </FormStepper>
        </>
    );
};

export default CreateDonationFormView;
