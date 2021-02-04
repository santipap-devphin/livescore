import React from 'react'
import PropTypes from 'prop-types'
import {VotedBarStyle} from "./style"

const VotedBar = ({className, score, perCent, title}) => {
    return (
        <VotedBarStyle className={`text-center ${className}`}>
            <div className="attendance mx-auto">
            <div className="attendance-bar">
                <div id="brighton" style={{ height: score > 240 ? score === '240px' : score }} className="attendance-cage-css">
                <p className="attendance-percent mb-0 font-weight-bold">{perCent}</p>
                </div>
            </div>
            </div>
            <p className="title">{title}</p>
        </VotedBarStyle>
    )
}

VotedBar.propTypes = {
    className: PropTypes.string,
    perCent: PropTypes.string,
    title: PropTypes.string,
}
VotedBar.defaultProps = {
    className: "",
};

export default VotedBar
