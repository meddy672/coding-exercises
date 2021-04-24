import React from 'react';
import './component.css';

function FormControl({ type, name, label, info, ...args }) {

    return (
        <div className="form-group">
            <label>{label} </label>
            <input className="form-control" type={type} name={name} {...args} /> {info}
        </div>
    )
}

export default FormControl