import React from 'react'
import PropTypes from 'prop-types'
import {InputGroupStyle} from "./style"

const InputGroup = ({className, symbo, disabled, value}) => {
    return (
        <InputGroupStyle className={`input-group ${className}`}>
            <div className="input-group-append">
                <span className="input-group-text bg-white" id="basic-addon1">{symbo}</span>
            </div>
            <input type="text" className="form-control rounded-0" placeholder="" value={value} aria-label="Username" aria-describedby="basic-addon1" disabled={disabled === true ? disabled : ""} />
        </InputGroupStyle>
    )
}

InputGroup.propTypes = {
    className: PropTypes.string,
    symbo: PropTypes.node,
    disabled: PropTypes.bool,
    value: PropTypes.string
}
InputGroup.defaultProps = {
    className: "",
};

export default InputGroup
