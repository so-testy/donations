import React from 'react';

import { FormLayoutGroup, Input, Radio } from '@vkontakte/vkui';
import { Field } from 'react-final-form';

import SelectAuthorField from '../ui/SelectAuthorField';
import BaseDonationForm from './BaseDonationForm';
import { requiredValidator, validationHelper } from './validators';

const TargetDonationAdditionalForm = ({ children, submitButton }) => {
    return (
        <BaseDonationForm submitButton={submitButton}>
            <FormLayoutGroup top="Автор">
                <SelectAuthorField />
            </FormLayoutGroup>
            <FormLayoutGroup top="Сбор завершится">
                <Field
                    name="donationEndType"
                    initialValue={1}
                    render={fieldProps => {
                        return (
                            <>
                                <Radio
                                    value="1"
                                    name="type"
                                    onChange={e =>
                                        fieldProps.input.onChange(
                                            e.target.value,
                                        )
                                    }
                                >
                                    Когда соберём сумму
                                </Radio>
                                <Radio
                                    value="2"
                                    name="type"
                                    onChange={e =>
                                        fieldProps.input.onChange(
                                            e.target.value,
                                        )
                                    }
                                    defaultChecked
                                >
                                    В определённую дату
                                </Radio>
                            </>
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top="Дата окончания">
                <Field
                    name="donationEndDate"
                    render={fieldProps => {
                        return (
                            <Input
                                type="date"
                                placeholder="Выберите дату"
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            {children}
        </BaseDonationForm>
    );
};

export default TargetDonationAdditionalForm;
