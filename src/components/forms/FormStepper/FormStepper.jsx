import React, { useState, useCallback, useMemo } from 'react';

import {
    Button,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    View,
} from '@vkontakte/vkui';
import { Form } from 'react-final-form';

const FormStepper = ({ children, onSubmit, onBack, viewId }) => {
    const [step, setStep] = useState(0);
    const [formState, setFormState] = useState({});

    const nextStep = useCallback(() => setStep(step + 1), [step, setStep]);
    const prevStep = useCallback(() => setStep(step - 1), [step, setStep]);

    const createPanelId = useCallback(index => viewId + '-' + index, [viewId]);

    const stepsNumber = React.Children.count(children);

    return (
        <>
            <Form
                onSubmit={onSubmit}
                initialValues={formState}
                render={({ handleSubmit, form: { getState, reset } }) => {
                    const { valid, values } = getState();

                    const panels = React.Children.map(
                        children,
                        (child, index) => {
                            const isLastPanel = index === stepsNumber - 1;

                            const submitButton = (
                                <Button
                                    type={isLastPanel ? 'submit' : 'button'}
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
                                    {!isLastPanel ? 'Далее' : 'Создать сбор'}
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
                                                                  values,
                                                              );
                                                              prevStep();
                                                          }
                                                }
                                            />
                                        }
                                    >
                                        {child.props.title}
                                    </PanelHeader>

                                    {React.cloneElement(child, {
                                        submitButton,
                                    })}
                                </Panel>
                            );
                        },
                        [step, stepsNumber],
                    );

                    return (
                        <form
                            onSubmit={async (...args) => {
                                await handleSubmit(...args);
                                reset();
                            }}
                        >
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
