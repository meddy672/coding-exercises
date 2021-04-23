import React from 'react';

function FormControl({ type, name, label, info, ...args }) {

    return (
        <div className="form-group">
            <label>{label} </label>
            <input type={type} name={name} {...args} /> {info}
        </div>
    )
}

export default FormControl