import React, { useContext } from 'react';

import {
    PanelHeader,
    PanelHeaderButton,
    Card,
    Group,
    Text,
    InfoRow,
    Progress,
    Separator,
    Banner,
    CardGrid,
    Title,
    Caption,
} from '@vkontakte/vkui';
import { Div } from '@vkontakte/vkui';
import { Button } from '@vkontakte/vkui';
import { Headline } from '@vkontakte/vkui';
import Icon24AddOutline from '@vkontakte/icons/dist/24/add_outline';

import useNavigation from '../../hooks/useNavigation';

import NavigationContext from '../../NavigationContext';
import StorageContext from '../../StorageContext';

const styles = {
    headline: {
        color: '#818C99',
    },
};

const DonationsPageView = () => {
    const { views } = useContext(NavigationContext);
    const {
        state: { donationList },
    } = useContext(StorageContext);

    const { navigate: goToCreateDonationPage } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.chooseDonationPage,
    );

    return (
        <>
            <PanelHeader
                right={
                    donationList && (
                        <PanelHeaderButton onClick={goToCreateDonationPage}>
                            <Icon24AddOutline />
                        </PanelHeaderButton>
                    )
                }
                separator={!donationList}
            >
                Пожертвования
            </PanelHeader>
            {donationList ? (
                <CardGrid style={{ margin: '12px 0' }}>
                    {donationList.map(
                        ({
                            donationName,
                            donationEndDate,
                            isSubscribe,
                            amount,
                            collectedAmount,
                        }) => {
                            const daysRemain = Math.floor(
                                (new Date(donationEndDate).getTime() -
                                    Date.now()) /
                                    (1000 * 60 * 60 * 24),
                            );

                            const percent =
                                amount !== 0
                                    ? (collectedAmount / amount) * 100
                                    : 0;

                            return (
                                <Card size="l" mode="outline">
                                    <Div>
                                        <Headline weight="semibold">
                                            {donationName}
                                        </Headline>
                                        <Text
                                            style={{
                                                color: 'var(--text_secondary)',
                                            }}
                                            level={1}
                                        >
                                            {isSubscribe
                                                ? 'Помощь нужна каждый месяц'
                                                : `Закончится через ${daysRemain} дней`}
                                        </Text>
                                        <Separator
                                            style={{ margin: '8px 0' }}
                                            wide
                                        />
                                        <InfoRow
                                            header={
                                                <Caption
                                                    level={1}
                                                    style={{
                                                        color:
                                                            'var(--text_primary)',
                                                        marginBottom: 6,
                                                    }}
                                                >
                                                    Собрано {collectedAmount} ₽
                                                    из {amount} ₽
                                                </Caption>
                                            }
                                        >
                                            <Progress
                                                disabled={false}
                                                value={percent}
                                            />
                                        </InfoRow>
                                    </Div>
                                </Card>
                            );
                        },
                    )}
                </CardGrid>
            ) : (
                <Div style={{ textAlign: 'center' }}>
                    <Headline weight="regular" style={styles.headline}>
                        У вас пока нет сборов.
                    </Headline>
                    <Headline
                        weight="regular"
                        style={{ marginBottom: 16, ...styles.headline }}
                    >
                        Начните доброе дело.
                    </Headline>
                    <Button onClick={goToCreateDonationPage}>
                        Создать сбор
                    </Button>
                </Div>
            )}
        </>
    );
};

export default DonationsPageView;
