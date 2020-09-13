import React from 'react';

import { FormLayout } from '@vkontakte/vkui';

const BaseDonationForm = ({ children, submitButton }) => {
    return (
        <FormLayout Component="div">
            {children}
            {submitButton}
        </FormLayout>
    );
};

export default BaseDonationForm;
