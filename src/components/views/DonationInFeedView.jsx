import React, { useContext, useState } from "react";

import { Text, SimpleCell } from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";

import Icon28LikeOutline from "@vkontakte/icons/dist/28/like_outline";
import Icon28CommentOutline from "@vkontakte/icons/dist/28/comment_outline";
import Icon28ShareOuline from "@vkontakte/icons/dist/28/share_outline";
import Icon28View from "@vkontakte/icons/dist/24/view";

import DonationPost from "../Common/DonationPost";

const DonationInFeedView = () => {
    // eslint-disable-next-line no-unused-vars
    const [donation, setDonation] = useState(
        JSON.parse(localStorage.getItem("appState")).donationList.slice(
            -1
        )[0] || {}
    );

    const { views } = useContext(NavigationContext);
    const { navigate: gotoDescription } = useNavigation(
        views.createDonation.name,
        views.createDonation.panels.donationDescription
    );

    return (
        <>
            <DonationPost
                disabled={false}
                clickHandler={gotoDescription}
                progressPercent={50}
                progressTitle={
                    !donation.isSubscribe
                        ? `Собрано ${donation.amount / 2} ₽ из ${
                              donation.amount
                          } ₽`
                        : `Собрано ${donation.amount / 2} ₽ в сентябре`
                }
                userMessage={donation.message}
                title={donation.donationName}
                author={"Матвей Правосудов"}
                date={new Date(donation.donationEndDate)}
                isSubscribe={donation.isSubscribe}
                image={"./shelter.jpg"}
                isHiddenAuthorMessage={false}
            />
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
