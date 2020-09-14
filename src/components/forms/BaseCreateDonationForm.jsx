import React from "react";

import { Div, File, FormLayoutGroup, Select, Banner } from "@vkontakte/vkui";

import Icon28PictureOutline from "@vkontakte/icons/dist/28/picture_outline";
import { Field } from "react-final-form";

import BaseDonationForm from "./BaseDonationForm";
import { requiredValidator, validationHelper } from "./validators";
import InputField from "../ui/InputField";
import TextareaField from "../ui/TextareaField";

const styles = {
    coverLoader: {
        height: 140,
        borderStyle: "dashed",
        display: "flex",
        justifyContent: "center",
    },
};

const toBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const BaseCreateDonationForm = ({ children, submitButton, t = {} }) => {
    const paymentOptions = [{ value: "vkpay", title: "Счёт VK Pay · 1234" }];

    return (
        <BaseDonationForm submitButton={submitButton}>
            <Field
                name="cover"
                render={(fieldProps) => {
                    return fieldProps.input.value ? (
                        <Banner
                            before={
                                <Div style={{ height: 108, padding: 0 }}></Div>
                            }
                            mode="image"
                            size="m"
                            background={
                                <img
                                    src={fieldProps.input.value}
                                    style={{
                                        objectFit: "cover",
                                        backgroundPosition: "right bottom",
                                        backgroundSize: "102%",
                                        height: "140px",
                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    }}
                                    alt=""
                                />
                            }
                            asideMode="dismiss"
                            style={{ marginTop: 0, marginBottom: 0 }}
                            onDismiss={() => {
                                fieldProps.input.onChange(null);
                                // removeCover();
                            }}
                        />
                    ) : (
                            <File
                                before={<Icon28PictureOutline />}
                                controlSize="xl"
                                mode="outline"
                                style={styles.coverLoader}
                                onChange={(e) => {
                                    toBase64(e.target.files[0]).then((data) => {
                                        // setCoverPreview(data);
                                        fieldProps.input.onChange(data);
                                    });
                                }}
                            >
                                Загрузить обложку
                            </File>
                        );
                }}
                validate={validationHelper(requiredValidator)}
            />
            <FormLayoutGroup top="Название сбора">
                <Field
                    name="donationName"
                    render={(fieldProps) => {
                        return (
                            <InputField
                                placeholder="Название сбора"
                                onChange={(e) =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                                fieldProps={fieldProps}
                            />
                        );
                    }}
                    validate={validationHelper(requiredValidator)}
                />
            </FormLayoutGroup>
            <FormLayoutGroup top={t.amount ? t.amount : "Сумма, ₽"}>
                <Field
                    name="amount"
                    render={(fieldProps) => {
                        return (
                            <InputField
                                type="number"
                                placeholder="Сколько нужно собрать?"
                                onChange={(e) =>
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
                    render={(fieldProps) => {
                        return (
                            <InputField
                                placeholder="Например, лечение человека"
                                onChange={(e) =>
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
                    render={(fieldProps) => {
                        return (
                            <TextareaField
                                placeholder="На что пойдут деньги и как они кому-то помогут?"
                                onChange={(e) =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                                fieldProps={fieldProps}
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
                    render={(fieldProps) => {
                        return (
                            <Select
                                onChange={(e) =>
                                    fieldProps.input.onChange(e.target.value)
                                }
                            >
                                {paymentOptions.map((option) => (
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
