import React from 'react';

const InputField = ({ label, type, placeholder }) => {
    return (
        <div className="w-full space-y-1 text-white py-2 mb-2">
            <label className="block text-lg font-medium">{label}</label>
            <input type={`${type}`} placeholder={placeholder} className="w-full p-2 border sm:text-sm rounded-r-md focus:ri dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ri" />
        </div>
    );
};

export default InputField;