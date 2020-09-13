import React, { useState, useCallback, useMemo } from 'react';

import {
    Button,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    View,
} from '@vkontakte/vkui';

const FormStepper = ({ children, onSubmit, onBack, viewId }) => {
    const [step, setStep] = useState(0);

    const nextStep = useCallback(() => setStep(step + 1), [step, setStep]);
    const prevStep = useCallback(() => setStep(step - 1), [step, setStep]);

    const createPanelId = useCallback(index => viewId + '-' + index, [viewId]);

    const stepsNumber = React.Children.count(children);

    const panels = React.Children.map(
        children,
        (child, index) => {
            const submitButton = (
                <Button
                    onClick={index < stepsNumber - 1 ? nextStep : onSubmit}
                    size="xl"
                >
                    {index < stepsNumber - 1 ? 'Далее' : 'Создать сбор'}
                </Button>
            );

            return (
                <Panel key={createPanelId(index)} id={createPanelId(index)}>
                    <PanelHeader
                        left={
                            <PanelHeaderBack
                                onClick={step === 0 ? onBack : prevStep}
                            />
                        }
                    >
                        {child.props.title}
                    </PanelHeader>

                    {React.cloneElement(child, { submitButton })}
                </Panel>
            );
        },
        [step, stepsNumber],
    );

    return (
        <>
            <View id={viewId} activePanel={createPanelId(step)}>
                {panels}
            </View>
        </>
    );
};

export default FormStepper;
