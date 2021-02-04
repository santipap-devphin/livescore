import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "../../commons/Avatar"
import {OverViewInjuredTableStyle} from "./style"

const OverViewInjuredTable = ({ className, plyers, title}) => {
    return (
        <OverViewInjuredTableStyle className={`table-responsive mb-3 ${className}`}>
            <table className="table table-striped">
            <caption className="text-white">{title}</caption>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Age</th>
                        <th>Reason</th>
                        <th>Position</th>
                        <th>Since</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plyers.map((play, index) => (
                            <tr key={index.toString()}>
                                <td>
                                    <Avatar
                                        size={30}
                                        shape="circle"
                                        src={play.img}
                                        alt={play.name}
                                        className="mr-3"
                                    />
                                    <span>{play.name}</span>
                                </td>
                                <td>{play.age}</td>
                                <td>Injury</td>
                                <td>-</td>
                                <td>29 Sep 2020</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </OverViewInjuredTableStyle>
    )
}

OverViewInjuredTable.propTypes = {
    className: PropTypes.string,
    plyers: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}
OverViewInjuredTable.defaultProps = {
    className: "",
};

export default OverViewInjuredTable
