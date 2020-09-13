import React, { useContext } from "react";

import { FormLayoutGroup } from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";
import BaseCreateDonationForm from "../forms/BaseCreateDonationForm";
import SelectAuthorField from "../ui/SelectAuthorField";
import FormStepper from "../forms/FormStepper/FormStepper";
import FormStep from "../forms/FormStepper/FormStep";
import StorageContext from "../../StorageContext";

const CreateRegularDonationFormView = () => {
    const { views } = useContext(NavigationContext);
    const { setState } = useContext(StorageContext);

    const { navigate: goToChooseDonationsPage } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage
    );

    const { navigate: goToPublishPage } = useNavigation(
        views.publishDonationToFeed,
        ""
    );

    const submit = async (values) => {
        setState({ donationList: [values] });
        goToPublishPage();
    };

    return (
        <>
            <FormStepper
                onBack={goToChooseDonationsPage}
                viewId="donation-form"
                onSubmit={submit}
            >
                <FormStep title="Регулярный сбор">
                    <BaseCreateDonationForm t={{ amount: "Сумма в месяц, ₽" }}>
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
