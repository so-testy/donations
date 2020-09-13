import React, { useCallback, useState } from 'react';

import {
    Div,
    File,
    FormLayoutGroup,
    Input,
    Textarea,
    Select,
    Banner,
} from '@vkontakte/vkui';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import { Field } from 'react-final-form';

import BaseDonationForm from './BaseDonationForm';
import { requiredValidator, validationHelper } from './validators';
import InputField from '../ui/InputField';

const styles = {
    coverLoader: {
        height: 140,
        borderStyle: 'dashed',
        display: 'flex',
        justifyContent: 'center',
    },
};

const BaseCreateDonationForm = ({ children, submitButton, t = {} }) => {
    const [coverPreview, setCoverPreview] = useState(null);

    const paymentOptions = [{ value: 'vkpay', title: 'Счёт VK Pay · 1234' }];

    const handleCover = useCallback(
        file => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = function () {
                setCoverPreview(fileReader.result);
            };
        },
        [setCoverPreview],
    );

    const removeCover = useCallback(() => setCoverPreview(null), [
        setCoverPreview,
    ]);

    return (
        <BaseDonationForm submitButton={submitButton}>
            <Field
                name="cover"
                render={fieldProps => {
                    return coverPreview ? (
                        <Banner
                            before={
                                <Div style={{ height: 108, padding: 0 }}></Div>
                            }
                            mode="image"
                            size="m"
                            background={
                                <img
                                    src={coverPreview}
                                    style={{
                                        objectFit: 'cover',
                                        backgroundPosition: 'right bottom',
                                        backgroundSize: '102%',
                                        height: '140px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    }}
                                    alt=""
                                />
                            }
                            asideMode="dismiss"
                            style={{ marginTop: 0, marginBottom: 0 }}
                            onDismiss={() => {
                                fieldProps.input.onChange(null);
                                removeCover();
                            }}
                        />
                    ) : (
                        <File
                            before={<Icon28PictureOutline />}
                            controlSize="xl"
                            mode="outline"
                            style={styles.coverLoader}
                            onChange={e => {
                                fieldProps.input.onChange(e.target.files[0]);
                                handleCover(e.target.files[0]);
                            }}
                        >
                            Загрузить обложку
                        </File>
                    );
                }}
            />
            <FormLayoutGroup top="Название сбора">
                <Field
                    name="donationName"
                    render={fieldProps => {
                        return (
                            <InputField
                                placeholder="Название сбора"
                                status={fieldProps.meta.error}
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                                fieldProps={fieldProps}
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top={t.amount ? t.amount : 'Сумма, ₽'}>
                <Field
                    name="amount"
                    render={fieldProps => {
                        return (
                            <InputField
                                type="number"
                                placeholder="Сколько нужно собрать?"
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                                fieldProps={fieldProps}
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top="Цель">
                <Field
                    name="purpose"
                    render={fieldProps => {
                        return (
                            <InputField
                                placeholder="Например, лечение человека"
                                status={fieldProps.meta.error}
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                                fieldProps={fieldProps}
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top="Описание">
                <Field
                    name="description"
                    render={fieldProps => {
                        return (
                            <Textarea
                                placeholder="На что пойдут деньги и как они кому-то помогут?"
                                status={fieldProps.meta.error}
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top="Куда получать деньги">
                <Field
                    name="paymentTarget"
                    initialValue={paymentOptions[0].value}
                    render={fieldProps => {
                        return (
                            <Select
                                onChange={e =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                            >
                                {paymentOptions.map(option => (
                                    <option
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.title}
                                    </option>
                                ))}
                            </Select>
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            {children}
        </BaseDonationForm>
    );
};

export default BaseCreateDonationForm;
