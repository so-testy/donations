import React, { useCallback, useState } from 'react';

import {
    Div,
    FormLayout,
    File,
    FormLayoutGroup,
    Input,
    Textarea,
    Select,
    Button,
    Banner,
} from '@vkontakte/vkui';

import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';

const styles = {
    coverLoader: {
        height: 140,
        borderStyle: 'dashed',
        display: 'flex',
        justifyContent: 'center',
    },
};

const BaseCreateDonationForm = ({ children, t = {} }) => {
    const [coverPreview, setCoverPreview] = useState(null);

    const paymentOptions = [{ value: 'vkpay', title: 'Счёт VK Pay · 1234' }];

    const handleCover = useCallback(
        e => {
            const file = e.target.files[0];
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
        <FormLayout>
            {coverPreview ? (
                <Banner
                    before={<Div style={{ height: 108, padding: 0 }}></Div>}
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
                    onDismiss={removeCover}
                />
            ) : (
                <File
                    before={<Icon28PictureOutline />}
                    controlSize="xl"
                    mode="outline"
                    style={styles.coverLoader}
                    onChange={handleCover}
                >
                    Загрузить обложку
                </File>
            )}
            <FormLayoutGroup top="Название сбора">
                <Input placeholder="Название сбора" />
            </FormLayoutGroup>
            <FormLayoutGroup top={t.amount ? t.amount : 'Сумма, ₽'}>
                <Input placeholder="Сколько нужно собрать?" />
            </FormLayoutGroup>
            <FormLayoutGroup top="Цель">
                <Input placeholder="Например, лечение человека" />
            </FormLayoutGroup>
            <FormLayoutGroup top="Описание">
                <Textarea placeholder="На что пойдут деньги и как они кому-то помогут?" />
            </FormLayoutGroup>
            <FormLayoutGroup top="Куда получать деньги">
                <Select>
                    {paymentOptions.map(option => (
                        <option value={option.value}>{option.title}</option>
                    ))}
                </Select>
            </FormLayoutGroup>
            {children}
            <Button size="xl">Создать сбор</Button>
        </FormLayout>
    );
};

export default BaseCreateDonationForm;
