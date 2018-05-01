import React from 'react';

export default props =>{
    const {label} = props
    return (
        <div className="form-group">
            <label>{label}</label>
            <input {...props} className="form-control"/>
        </div>
    )
}