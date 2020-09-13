export const requiredValidator = value => {
    if (typeof value === 'string') value = value.trim();

    return Boolean(value) ? undefined : 'Поле обязательно для заполнения';
};

export const validationHelper = (...validators) => value => {
    return validators.every(validator => validator(value));
};
