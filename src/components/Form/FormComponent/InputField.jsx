import React from 'react';

const InputField = ({ label, name, type, placeholder, id, register, errors }) => {
    return (
        <div className="w-full space-y-1 text-white py-2">
            <label className="block text-lg font-medium">{label}</label>
            <input
                {...register(name, {
                    required: {
                        value: true,
                        message: `Please enter a ${name}`
                    }
                })}
                type={type}
                placeholder={placeholder}
                id={id}
                className="w-full p-2 border text-base rounded-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 opacity-80 focus:ri"
            />
        </div>
    );
};

export default InputField;