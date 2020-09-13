import React from 'react';

import { FormLayout, FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';

import SelectAuthorField from '../ui/SelectAuthorField';

const TargetDonationAdditionalForm = ({ children, submitButton }) => {
    return (
        <FormLayout>
            <FormLayoutGroup top="Автор">
                <SelectAuthorField />
            </FormLayoutGroup>
            <FormLayoutGroup top="Сбор завершится">
                <Radio value="1" name="type">
                    Когда соберём сумму
                </Radio>
                <Radio value="2" name="type" defaultChecked>
                    В определённую дату
                </Radio>
            </FormLayoutGroup>
            <FormLayoutGroup top="Дата окончания">
                <Input type="date" placeholder="Выберите дату" />
            </FormLayoutGroup>
            {children}
            {submitButton}
        </FormLayout>
    );
};

export default TargetDonationAdditionalForm;
