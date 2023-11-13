import React from 'react';

const SelectOption = ({ options, label, register,name }) => {
    return (
        <div className='w-full space-y-1 text-white py-2 mb-2'>
            <label className="block text-lg font-medium">{label}</label>
            <select
                {...register(city,{
                    required: {
                        value: true,
                        message: `Please enter a ${name}`
                    }
                })}
                className='w-full p-2 border text-base rounded-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 opacity-80 focus:ri'
            >
                <option value='' disabled>Select an option</option>
                {
                    options.map((option, index) => {
                        return <option key={index} value={option.value}>{option.name}</option>
                    })
                }
            </select>
        </div>
    );
};

export default SelectOption;