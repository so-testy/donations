import React, { useCallback, useContext } from 'react';

import {
    Card,
    PanelHeader,
    PanelHeaderBack,
    Div,
    Title,
    Cell,
    CardGrid,
    Headline,
} from '@vkontakte/vkui';

import NavigationContext from '../../NavigationContext';

const styles = {
    card: {
        border: '0.33px solid rgba(0, 0, 0, 0.08)',
    },
};

const CreateDonationView = () => {
    const { setActiveView, views } = useContext(NavigationContext);

    const goToDonationsPage = useCallback(
        () => setActiveView(views.donations),
        [setActiveView, views],
    );

    return (
        <>
            <PanelHeader left={<PanelHeaderBack onClick={goToDonationsPage} />}>
                Тип сбора
            </PanelHeader>
            <CardGrid>
                <Card mode="tint" size="l" style={styles.card}>
                    <Cell description="Когда есть определённая цель">
                        <Headline>Целевой сбор</Headline>
                    </Cell>
                </Card>

                <Card mode="tint" size="l" style={styles.card}>
                    <Cell description="Если помощь нужна ежемесячно">
                        <Headline>Регулярный сбор</Headline>
                    </Cell>
                </Card>
            </CardGrid>
        </>
    );
};

export default CreateDonationView;
