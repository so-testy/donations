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

const DonationPost = ({
    disabled,
    clickHandler,
    progressPercent,
    progressTitle,
    userMessage,
    title,
    author,
    date,
    isSubscribe,
    image,
    isHiddenAuthor,
    isHiddenAuthorMessage,
}) => {
    return (
        <>
            {!isHiddenAuthor && (
                <Group>
                    <SimpleCell
                        disabled={true}
                        description="час назад"
                        before={<Avatar size={48} src={"/avatar.jpg"} />}
                        after={
                            <Icon24MoreHorizontal fill="var(--text_secondary)" />
                        }
                    >
                        {author}
                    </SimpleCell>
                </Group>
            )}
            {!isHiddenAuthorMessage && (
                <Div>
                    <Text>{userMessage}</Text>
                </Div>
            )}
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
                    src={image}
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
                        {title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            marginLeft: 10,
                            color: "var(--text_secondary)",
                        }}
                    >
                        {author} ·{" "}
                        {isSubscribe
                            ? "Помощь нужна каждый месяц"
                            : `Закончится через ${Math.floor(
                                  (date.getTime() - Date.now()) /
                                      (1000 * 60 * 60 * 24)
                              )} дней`}
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
                                {progressTitle}
                            </Text>
                        }
                    >
                        <Progress disabled={disabled} value={progressPercent} />
                    </InfoRow>
                    <Button
                        style={{
                            marginRight: 15,
                        }}
                        mode={"outline"}
                        disabled={disabled}
                        onClick={() => {
                            clickHandler();
                        }}
                    >
                        Помочь
                    </Button>
                </Group>
            </Card>
        </>
    );
};

export default DonationPost;
