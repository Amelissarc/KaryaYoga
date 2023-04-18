import React from 'react'

export default function InputForm({divClass="", id, name, value, text, placeholder="", type, pattern="[a-zA-Z0-9,. ]+", defaultChecked = false, onChange}) {
    return (
        <div className={divClass}>
            <label htmlFor={id} className={type === "radio" ? "form-check-label" : "form-label"}>{text}</label>
            <input 
                type={type} 
                name={name} 
                value={value}
                className={type === "radio" ? "form-check-input" : "form-control"} 
                placeholder={placeholder} 
                id={id} 
                pattern={pattern} 
                defaultChecked={defaultChecked} 
                onChange={onChange}
                required
            />
        </div>
    )
}