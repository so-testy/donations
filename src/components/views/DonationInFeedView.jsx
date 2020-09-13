import React, { useContext } from "react";

import { Text, SimpleCell } from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";

import Icon28LikeOutline from "@vkontakte/icons/dist/28/like_outline";
import Icon28CommentOutline from "@vkontakte/icons/dist/28/comment_outline";
import Icon28ShareOuline from "@vkontakte/icons/dist/28/share_outline";
import Icon28View from "@vkontakte/icons/dist/24/view";

import DonationPost from "../Common/DonationPost";

const DonationInFeedView = () => {
    const { views } = useContext(NavigationContext);
    const { navigate: gotoDescription } = useNavigation(
        views.donationDescription
    );

    return (
        <>
            <DonationPost
                disabled={false}
                clickHandler={gotoDescription}
                progressPercent={87.5}
                progressTitle={"Собрано 8 750 ₽ из 10 000 ₽"}
                userMessage={
                    "Сейчас самое время помочь тем, кто не может попросить о помощи сам."
                }
                title={"Добряши помогают щенкам"}
                author={"Матвей Правосудов"}
                date={new Date(2020, 9, 30)}
                isSubscribe={false}
                image={"/shelter.jpg"}
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
