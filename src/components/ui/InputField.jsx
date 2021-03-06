import React from 'react';

import { Input } from '@vkontakte/vkui';

const InputField = ({ fieldProps, ...other }) => {
    const isError = fieldProps.meta.modified && fieldProps.meta.error;

    return (
        <Input
            {...other}
            value={fieldProps.input.value}
            status={isError ? 'error' : 'default'}
        />
    );
};

export default InputField;
