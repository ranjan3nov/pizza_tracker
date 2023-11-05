import React, { forwardRef, useEffect, useRef } from 'react';


const SelectInput = forwardRef(({ className = '', isFocused = false, options = [], ...props }, ref) => {
    const input = ref || useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <select
            {...props}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={input}>
            {options.map((option) =>
                <option key={option}>{option}</option>
            )}
        </select>
    );
});

export default SelectInput;
