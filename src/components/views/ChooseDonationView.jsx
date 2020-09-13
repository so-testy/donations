import React, { useContext } from "react";

import {
    Card,
    PanelHeader,
    PanelHeaderBack,
    Cell,
    CardGrid,
    Headline,
    Div,
} from "@vkontakte/vkui";

import Icon28CalendarOutline from "@vkontakte/icons/dist/28/calendar_outline";
import Icon24ChevronRight from "@vkontakte/icons/dist/24/chevron_right";
import Icon28TargetOutline from "@vkontakte/icons/dist/28/target_outline";

import useNavigation from "../../hooks/useNavigation";

import NavigationContext from "../../NavigationContext";

const styles = {
    card: {
        border: "0.33px solid rgba(0, 0, 0, 0.08)",
    },
};

const DonationCell = ({ description, title, icon }) => (
    <Cell
        description={description}
        asideContent={<Icon24ChevronRight />}
        before={icon}
    >
        <Headline weight="medium">{title}</Headline>
    </Cell>
);

const CreateDonationView = () => {
    const { views } = useContext(NavigationContext);

    const { navigate: goToDonationsPage } = useNavigation(
        views.donations.name,
        views.donations.panels.donationsPage
    );

    const { navigate: goToCreateDonation } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.createDonationPage
    );

    const { navigate: goToCreateRegularDonation } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.createRegularDonationPage
    );

    return (
        <>
            <PanelHeader left={<PanelHeaderBack onClick={goToDonationsPage} />}>
                Тип сбора
            </PanelHeader>
            <CardGrid>
                <Card
                    mode="tint"
                    size="l"
                    style={styles.card}
                    onClick={goToCreateDonation}
                >
                    <DonationCell
                        description="Когда есть определённая цель"
                        title="Целевой сбор"
                        icon={<Icon28TargetOutline />}
                    />
                </Card>
                <Card
                    mode="tint"
                    size="l"
                    style={styles.card}
                    onClick={goToCreateRegularDonation}
                >
                    <DonationCell
                        description="Если помощь нужна ежемесячно"
                        title="Регулярный сбор"
                        icon={<Icon28CalendarOutline />}
                    />
                </Card>
            </CardGrid>
        </>
    );
};

export default CreateDonationView;
