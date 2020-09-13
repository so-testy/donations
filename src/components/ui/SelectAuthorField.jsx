import React from 'react';

import { Select } from '@vkontakte/vkui';

const SelectAuthorField = () => {
    const authors = [
        {
            value: '1',
            title: 'Матвей Правосудов',
        },
    ];

    return (
        <Select>
            {authors.map(option => (
                <option key={option.value} value={option.value}>
                    {option.title}
                </option>
            ))}
        </Select>
    );
};

export default SelectAuthorField;
