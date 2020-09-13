import React, { useContext } from "react";

import {
    PanelHeader,
    PanelHeaderButton,
    Textarea,
    Text,
    Group,
    Card,
    Button,
    InfoRow,
    Progress,
} from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";

import IconUp from "@vkontakte/icons/dist/24/up";
import IconDismiss from "@vkontakte/icons/dist/24/dismiss";

const PublishDonationToFeedView = () => {
    const { views } = useContext(NavigationContext);
    const { navigate: goToFeed } = useNavigation(views.donationInFeed);

    return (
        <>
            <PanelHeader
                left={
                    <PanelHeaderButton onClick={() => {}}>
                        <IconDismiss fill={"var(--text_secondary)"} />
                    </PanelHeaderButton>
                }
                right={
                    <PanelHeaderButton
                        onClick={goToFeed}
                        style={{ marginRight: 10 }}
                    >
                        <IconUp
                            height={20}
                            width={20}
                            style={{
                                background: "var(--button_primary_background)",
                                borderRadius: "50%",
                                padding: 4,
                            }}
                            fill={"#ffffff"}
                        />
                    </PanelHeaderButton>
                }
            >
                Матвей
            </PanelHeader>
            <Textarea
                style={{
                    margin: "5px 10px",
                }}
                getRef={(textarea) => {
                    if (textarea) {
                        textarea.style.background = "#ffffff";
                        textarea.style.minHeight = "65px";
                    }
                }}
                defaultValue={
                    "Сейчас самое время помочь тем, кто не может попросить о помощи сам."
                }
            ></Textarea>
            <Card
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    overflow: "hidden",
                }}
                size="s"
                mode="outline"
            >
                <img
                    style={{
                        width: "100%",
                    }}
                    alt="shelter"
                    src={"/shelter.jpg"}
                />
                <Group>
                    <Text
                        style={{
                            fontSize: 16,
                            marginLeft: 10,
                            marginTop: 5,
                        }}
                        weight={"semibold"}
                    >
                        Добряши помогают щенкам
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "var(--text_secondary)",
                        }}
                    >
                        Матвей Правосудов · Закончится через 5 дней
                    </Text>
                </Group>
                <Group
                    style={{
                        display: "grid",
                        alignItems: "center",
                        gridTemplateColumns: "auto 90px",
                        gridGap: "20px",
                    }}
                >
                    <InfoRow
                        style={{
                            margin: "10px 0px 15px 15px",
                        }}
                        header={
                            <Text
                                style={{
                                    fontSize: 13,
                                    color: "var(--text_primary)",
                                    marginBottom: 5,
                                }}
                            >
                                Помоги первым
                            </Text>
                        }
                    >
                        <Progress value={0} disabled={true} />
                    </InfoRow>
                    <Button
                        style={{
                            marginRight: 15,
                        }}
                        mode={"outline"}
                        disabled={true}
                    >
                        Помочь
                    </Button>
                </Group>
            </Card>
        </>
    );
};

export default PublishDonationToFeedView;
