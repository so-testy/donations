import React from "react";

import {
    Text,
    Group,
    SimpleCell,
    Card,
    Div,
    Avatar,
    Button,
    InfoRow,
    Progress,
} from "@vkontakte/vkui";

import Icon24MoreHorizontal from "@vkontakte/icons/dist/24/more_horizontal";
import Icon28LikeOutline from "@vkontakte/icons/dist/28/like_outline";
import Icon28CommentOutline from "@vkontakte/icons/dist/28/comment_outline";
import Icon28ShareOuline from "@vkontakte/icons/dist/28/share_outline";
import Icon28View from "@vkontakte/icons/dist/24/view";

const DonationInFeedView = () => {
    return (
        <>
            <Group>
                <SimpleCell
                    disabled={true}
                    description="час назад"
                    before={<Avatar size={48} src={"/avatar.jpg"} />}
                    after={
                        <Icon24MoreHorizontal fill="var(--text_secondary)" />
                    }
                >
                    Матвей Правосудов
                </SimpleCell>
            </Group>
            <Div>
                <Text>
                    Сейчас самое время помочь тем, кто не может попросить о
                    помощи сам.
                </Text>
            </Div>
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
                                Собрано 8 750 ₽ из 10 000 ₽
                            </Text>
                        }
                    >
                        <Progress value={87.5} />
                    </InfoRow>
                    <Button
                        style={{
                            marginRight: 15,
                        }}
                        mode={"outline"}
                    >
                        Помочь
                    </Button>
                </Group>
            </Card>
            <div
                style={{
                    display: "grid",
                    margin: "0px 10px",
                    gridTemplateColumns: "75px 75px 75px auto 75px",
                }}
            >
                <SimpleCell
                    disabled={true}
                    style={{
                        paddingLeft: 0,
                    }}
                    onClick={() => {}}
                    before={
                        <Icon28LikeOutline
                            style={{
                                padding: "10px 5px 10px 0",
                            }}
                            fill={"var(--text_secondary)"}
                            width={24}
                        />
                    }
                >
                    <Text
                        style={{
                            color: "var(--text_secondary)",
                        }}
                    >
                        65
                    </Text>
                </SimpleCell>
                <SimpleCell
                    disabled={true}
                    style={{
                        paddingLeft: 0,
                    }}
                    onClick={() => {}}
                    before={
                        <Icon28CommentOutline
                            style={{
                                padding: "10px 5px 10px 0",
                            }}
                            fill={"var(--text_secondary)"}
                            width={24}
                        />
                    }
                >
                    <Text
                        style={{
                            color: "var(--text_secondary)",
                        }}
                    >
                        65
                    </Text>
                </SimpleCell>
                <SimpleCell
                    disabled={true}
                    style={{
                        flexGrow: 1,
                        paddingLeft: 0,
                    }}
                    onClick={() => {}}
                    before={
                        <Icon28ShareOuline
                            style={{
                                padding: "10px 5px 10px 0",
                            }}
                            fill={"var(--text_secondary)"}
                            width={24}
                        />
                    }
                >
                    <Text
                        style={{
                            color: "var(--text_secondary)",
                        }}
                    >
                        4
                    </Text>
                </SimpleCell>
                <div></div>
                <SimpleCell
                    disabled={true}
                    style={{
                        paddingLeft: 0,
                    }}
                    onClick={() => {}}
                    before={
                        <Icon28View
                            style={{
                                padding: "10px 5px 10px 0",
                            }}
                            fill={"var(--text_secondary)"}
                            width={18}
                        />
                    }
                >
                    <Text
                        style={{
                            color: "var(--text_secondary)",
                        }}
                    >
                        7,2 K
                    </Text>
                </SimpleCell>
            </div>
        </>
    );
};

export default DonationInFeedView;
