import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Step,
    ProgressBar,
    StepsContainer,
    StatusBar,
    StepBox
} from "./styles";

interface IRegisterSteps {
    counter: number;
}

const RegisterStepsComponent: React.FC<IRegisterSteps> = ({ counter }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(counter);

    useEffect(() => {
        const statusBar = ref?.current;
        if (statusBar) {
            if (counter === 1) {
                statusBar.animate(
                    [
                        {
                            width: "50%"
                        }
                    ],
                    {
                        duration: 500,
                        easing: "ease",
                        fill: "forwards"
                    }
                );

                setTimeout(() => {
                    setPosition(counter);
                }, 400);

                return;
            }
            if (counter === 2) {
                statusBar.animate(
                    [
                        {
                            width: "100%"
                        }
                    ],
                    {
                        duration: 500,
                        easing: "ease",
                        fill: "forwards"
                    }
                );

                setTimeout(() => {
                    setPosition(counter);
                }, 400);

                return;
            }

            statusBar.animate(
                [
                    {
                        width: "0%"
                    }
                ],
                {
                    duration: 500,
                    easing: "ease",
                    fill: "forwards"
                }
            );

            setTimeout(() => {
                setPosition(counter);
            }, 400);
        }
    }, [counter, setPosition]);

    return (
        <Container>
            <StepsContainer>
                <ProgressBar>
                    <StatusBar ref={ref} />
                </ProgressBar>
                <StepBox active={position >= 0}>
                    <p>Especialidade</p>
                    <Step active={position >= 0} />
                </StepBox>
                <StepBox active={position >= 1}>
                    <p>Agendar horário</p>
                    <Step active={position >= 1} />
                </StepBox>
                <StepBox active={position === 2}>
                    <p>Confirmar</p>
                    <Step active={position === 2} />
                </StepBox>
            </StepsContainer>
        </Container>
    );
};

export default RegisterStepsComponent;
