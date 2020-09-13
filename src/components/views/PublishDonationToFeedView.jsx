import React, { useContext } from "react";

import { PanelHeader, PanelHeaderButton, Textarea } from "@vkontakte/vkui";

import NavigationContext from "../../NavigationContext";
import useNavigation from "../../hooks/useNavigation";

import IconUp from "@vkontakte/icons/dist/24/up";
import IconDismiss from "@vkontakte/icons/dist/24/dismiss";

import DonationPost from "../Common/DonationPost";

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
            <DonationPost
                disabled={true}
                clickHandler={goToFeed}
                progressPercent={0}
                progressTitle={"Помоги первым"}
                userMessage={
                    "Сейчас самое время помочь тем, кто не может попросить о помощи сам."
                }
                title={"Добряши помогают щенкам"}
                author={"Матвей Правосудов"}
                date={new Date(2020, 9, 30)}
                isSubscribe={false}
                image={"/shelter.jpg"}
                isHiddenAuthor={true}
                isHiddenAuthorMessage={true}
            />
        </>
    );
};

export default PublishDonationToFeedView;
