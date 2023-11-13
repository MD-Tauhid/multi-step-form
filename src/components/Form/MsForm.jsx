import { Button, Step, Stepper } from '@material-tailwind/react';
import React, { useState } from 'react';
import InputField from './FormComponent/InputField';

const MsForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    return (
        <div className='grid grid-row items-center w-3/4 bg-teal-900 opacity-60 mx-auto mt-8 p-5'>
            <div className="w-4/5 mx-auto">
                <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                >
                    <Step onClick={() => setActiveStep(0)}>1</Step>
                    <Step onClick={() => setActiveStep(1)}>2</Step>
                    <Step onClick={() => setActiveStep(2)}>3</Step>
                </Stepper>
                {/* <div className="mt-16 flex justify-between">
                    <Button onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    <Button onClick={handleNext} disabled={isLastStep}>
                        Next
                    </Button>
                </div> */}
            </div>
            <form action="" className='w-4/5 mx-auto'>
                <fieldset>
                    <InputField type={"text"} label={"Name"} placeholder={"name"}></InputField>
                    <InputField type={"email"} label={"Email"} placeholder={"email@mail.com"}></InputField>
                </fieldset>
            </form>

        </div>
    );
};

export default MsForm;