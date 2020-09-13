import React, { useContext, useState } from "react";

import { PanelHeader, PanelHeaderButton, Textarea } from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";

import IconUp from "@vkontakte/icons/dist/24/up";
import IconDismiss from "@vkontakte/icons/dist/24/dismiss";

import DonationPost from "../Common/DonationPost";

const PublishDonationToFeedView = () => {
    const [donation, setDonation] = useState(
        JSON.parse(localStorage.getItem("appState")).donationList[0] || {}
    );

    const { views } = useContext(NavigationContext);
    const { navigate: goToFeed } = useNavigation(views.donationInFeed);

    const changeMessage = (e) => {
        e.preventDefault();
        const newDonation = {
            ...donation,
            message: e.target.value,
        };
        setDonation(newDonation);
        localStorage.setItem(
            "appState",
            JSON.stringify({
                donationList: [
                    ...JSON.parse(
                        localStorage.getItem("appState")
                    ).donationList.slice(0, -1),
                    newDonation,
                ],
            })
        );
    };

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
                onChange={changeMessage}
                value={donation.message || "Поддержи проект!"}
            ></Textarea>
            <DonationPost
                disabled={true}
                clickHandler={goToFeed}
                progressPercent={0}
                progressTitle={"Помоги первым"}
                userMessage={donation.message}
                title={donation.donationName}
                author={"Матвей Правосудов"}
                date={new Date(donation.payDate)}
                isSubscribe={donation.isSubscribe}
                image={"/shelter.jpg"}
                isHiddenAuthor={true}
                isHiddenAuthorMessage={true}
            />
        </>
    );
};

export default PublishDonationToFeedView;
