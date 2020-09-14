import React, { useState, useCallback, useEffect } from "react";

import {
    Button,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    View,
} from "@vkontakte/vkui";
import { Form } from "react-final-form";

const FormStepper = ({ children, onSubmit, onBack, viewId }) => {
    const [step, setStep] = useState(0);
    const [formState, setFormState] = useState({});

    const stepIds = React.Children.map(children, (child) => child.props.id);

    const nextStep = useCallback(() => setStep(step + 1), [step, setStep]);
    const prevStep = useCallback(() => setStep(step - 1), [step, setStep]);

    const createPanelId = useCallback(
        (index) => viewId + "-" + stepIds[index],
        [viewId, stepIds]
    );

    const stepsNumber = React.Children.count(children);

    useEffect(() => {
        console.log("mounted");
        return () => console.log("removed");
    }, []);

    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={formState}
                render={({ handleSubmit, form: { getState } }) => {
                    const { valid, values } = getState();

                    const panels = React.Children.map(
                        children,
                        (child, index) => {
                            const isLastPanel = index === stepsNumber - 1;

                            const submitButton = (
                                <Button
                                    type={isLastPanel ? "submit" : "button"}
                                    onClick={
                                        !isLastPanel
                                            ? () => {
                                                  setFormState(values);
                                                  nextStep();
                                              }
                                            : null
                                    }
                                    size="xl"
                                    disabled={!valid}
                                >
                                    {!isLastPanel ? "Далее" : "Создать сбор"}
                                </Button>
                            );

                            return (
                                <Panel
                                    key={createPanelId(index)}
                                    id={createPanelId(index)}
                                >
                                    <PanelHeader
                                        left={
                                            <PanelHeaderBack
                                                onClick={
                                                    step === 0
                                                        ? onBack
                                                        : () => {
                                                              setFormState(
                                                                  values
                                                              );
                                                              prevStep();
                                                          }
                                                }
                                            />
                                        }
                                        separator={false}
                                    >
                                        {child.props.title}
                                    </PanelHeader>

                                    {React.cloneElement(child, {
                                        submitButton,
                                    })}
                                </Panel>
                            );
                        },
                        [step, stepsNumber]
                    );

                    return (
                        <form onSubmit={handleSubmit}>
                            <View id={viewId} activePanel={createPanelId(step)}>
                                {panels}
                            </View>
                        </form>
                    );
                }}
            />
        </>
    );
};

export default FormStepper;
