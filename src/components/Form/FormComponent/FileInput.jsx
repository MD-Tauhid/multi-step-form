import React from 'react';

const FileInput = ({id, type, label}) => {
    return (
        <div className='w-full space-y-1 text-white py-2 mb-2'>
            <label for="files" className="block text-lg font-medium">{label}</label>
            <input type={type} name="files" id={id} className="px-8 w-full py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800" />
        </div>
    );
};

export default FileInput;