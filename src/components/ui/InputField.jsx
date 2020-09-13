import React from 'react';

import { Input } from '@vkontakte/vkui';

const InputField = ({ fieldProps, ...other }) => {
    const error = fieldProps.meta.error;

    return (
        <Input {...other} status={error ? 'error' : 'default'} bottom={error} />
    );
};

export default InputField;
