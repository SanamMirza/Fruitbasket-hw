import React from 'react';

function Form ({ name, type, label, value, changeHandler}) {
    return (

        <div>
            <label htmlFor={`${name}`}>{label}</label>
            <input
                name={`${name}`}
                id={`${name}`}
                type={type}
                value={value}
                onChange={(e) => changeHandler(e.target.value)}
                />
        </div>
    );
}

export default Form;