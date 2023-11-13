import { Button, Step, Stepper } from '@material-tailwind/react';
import React, { useState } from 'react';
import InputField from './FormComponent/InputField';
import SelectOption from './FormComponent/SelectOption';
import FileInput from './FormComponent/FileInput';
import { Controller, useForm } from 'react-hook-form';

import * as yup from "yup"


const MsForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

    const options = [
        { value: 'dhaka', name: 'Dhaka' },
        { value: 'khulna', name: 'Khulna' },
        { value: 'satkhira', name: 'Satkhira' }
    ]


    // for form validation yup schema
    // const schema = yup.object().shape({
    //     firstName: yup.string().required("Please enter your first name"),
    //     lastName: yup.string().required("Please enter your last name"),
    //     email: yup.string().email().required("Please enter a mail"),
    //     city: yup.string().required("Please select a city"),
    //     image: yup.string().required("Please upload a image")
    // })

    // form validation 
    const { watch, register,control, formState: { errors, isValid } } = useForm({ mode: "all" })
    return (
        <div className='grid grid-row items-center w-3/4 bg-teal-900 opacity-60 mx-auto my-8 p-5 rounded-xl'>
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

            </div>
            <form action="" className='w-4/5 mx-auto my-10'>
                {/* first step */}
                {activeStep === 0 && (
                    <fieldset>
                        <InputField register={register} type={"text"} name={"firstName"} id={"firstName"} label={"First Name"} placeholder={"First Name"}></InputField>
                        {
                            errors.firstName && <p className='text-sm text-red-500 mb-2'>{errors.firstName.message}</p>
                        }
                        <InputField register={register} type={"text"} name={"lastName"} id={"lastName"} label={"Last Name"} placeholder={"Last Name"}></InputField>
                        {
                            errors.lastName && <p className='text-sm text-red-500 mb-2'>{errors.lastName.message}</p>
                        }
                    </fieldset>
                )}

                {/* second step */}
                {activeStep === 1 && (
                    <fieldset>
                        <InputField register={register} type={"email"} name={"email"} id={"email"} label={"Email"} placeholder={"email@mail.com"}></InputField>
                        {
                            errors.email && <p className='text-sm text-red-500 mb-2'>{errors.email.message}</p>
                        }
                        <Controller
                            name='city'
                            control={control}
                            rules={{required: {
                                value: true,
                                message: `Please enter a ${name}`
                            }}}
                        />
                        <SelectOption register={register} options={options} label={"City"}></SelectOption>

                    </fieldset>
                )}

                {/* final step */}
                {activeStep === 2 && (
                    <fieldset>
                        <FileInput label={'Upload your photo'} type={"file"} id={"file"}></FileInput>
                    </fieldset>
                )}

                {/* Button */}
                <div className="mt-16 flex justify-between">
                    <Button className='bg-blue-gray-100 text-gray-900 font-bold' onClick={handlePrev} disabled={isFirstStep}>
                        Prev
                    </Button>
                    {
                        isLastStep ?
                            <Button type='submit' className='bg-blue-gray-100 text-gray-900 font-bold'>
                                Submit
                            </Button>
                            :
                            <Button className='bg-blue-gray-100 text-gray-900 font-bold' onClick={handleNext} disabled={!isValid}>
                                Next
                            </Button>
                    }
                </div>
                <pre className='text-white'>{JSON.stringify(watch(), null, 2)}</pre>
            </form>

        </div>
    );
};

export default MsForm;