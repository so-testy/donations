import React from 'react';

const FormStep = ({ children, submitButton }) => {
    return React.cloneElement(children, { submitButton });
};

export default FormStep;
