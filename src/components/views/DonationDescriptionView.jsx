import React, { useState } from "react";

import {
    Text,
    Group,
    SimpleCell,
    Separator,
    Div,
    InfoRow,
    Progress,
} from "@vkontakte/vkui";

import Icon28LikeOutline from "@vkontakte/icons/dist/28/like_outline";
import Icon28CommentOutline from "@vkontakte/icons/dist/28/comment_outline";
import Icon28ShareOuline from "@vkontakte/icons/dist/28/share_outline";
import Icon28View from "@vkontakte/icons/dist/24/view";

const DonationDescriptionView = () => {
    const [donation, setDonation] = useState(
        JSON.parse(localStorage.getItem("appState")).donationList[0] || {}
    );

    return (
        <>
            <img
                style={{
                    width: "100%",
                    borderRadius: "15px 15px 0px 0px",
                }}
                alt="shelter"
                src={"/shelter.jpg"}
            />
            <Div
                style={{
                    padding: "0px 10px",
                }}
            >
                <Group>
                    <Text
                        style={{
                            fontSize: 24,
                            margin: "15px 0px 10px",
                        }}
                        weight={"medium"}
                    >
                        {donation.donationName}
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "var(--text_secondary)",
                        }}
                        weight={"semibold"}
                    >
                        Автор Матвей Правосудов
                    </Text>
                    <Text
                        style={{
                            fontSize: 14,
                            color: "var(--text_secondary)",
                        }}
                    >
                        Сбор{" "}
                        {donation.isSubscribe
                            ? "помощь нужна каждый месяц"
                            : `закончится через ${Math.floor(
                                  (new Date(donation.payDate).getTime() -
                                      Date.now()) /
                                      (1000 * 60 * 60 * 24)
                              )} дней`}
                    </Text>
                </Group>
                <Group>
                    <InfoRow
                        header={
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: "var(--text_primary)",
                                    marginBottom: 5,
                                }}
                            >
                                {donation.isSubscribe
                                    ? "Помощь нужна каждый месяц"
                                    : `Закончится через ${Math.floor(
                                          (new Date(
                                              donation.payDate
                                          ).getTime() -
                                              Date.now()) /
                                              (1000 * 60 * 60 * 24)
                                      )} дней`}
                            </Text>
                        }
                    >
                        <Progress value={50} />
                    </InfoRow>
                </Group>

                <Group>
                    <Text>{donation.description}</Text>
                </Group>
                <Separator
                    style={{
                        marginTop: 15,
                    }}
                />
                <div
                    style={{
                        display: "grid",
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
                <Separator wide={true} />
            </Div>
        </>
    );
};

export default DonationDescriptionView;
