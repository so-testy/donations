import React from 'react';

import { Select } from '@vkontakte/vkui';
import { Field } from 'react-final-form';
import { requiredValidator, validationHelper } from '../forms/validators';

const SelectAuthorField = () => {
    const authors = [
        {
            value: '1',
            title: 'Матвей Правосудов',
        },
    ];

    return (
        <Field
            name="donationAuthor"
            initialValue={authors[0].value}
            render={fieldProps => {
                return (
                    <Select
                        onChange={e =>
                            fieldProps.input.onChange(e.target.value)
                        }
                    >
                        {authors.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.title}
                            </option>
                        ))}
                    </Select>
                );
            }}
            validate={validationHelper(requiredValidator)}
        />
    );
};

export default SelectAuthorField;
