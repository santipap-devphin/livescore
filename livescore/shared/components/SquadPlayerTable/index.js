import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "../../commons/Avatar"
import {SquadPlayerTableStyle} from "./style"

const SquadPlayerTable = ({ className, plyers, title}) => {
    return (
        <SquadPlayerTableStyle className={`table-responsive ${className}`}>
            <table className="table table-striped">
                <caption className="">{title}</caption>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Age</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Market value</th>
                        <th>Contract untill</th>
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
                                <td>{play.height}</td>
                                <td>{play.weight}</td>
                                <td>{play.market}</td>
                                <td>{play.contract}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </SquadPlayerTableStyle>
    )
}

SquadPlayerTable.propTypes = {
    className: PropTypes.string,
    plyers: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}
SquadPlayerTable.defaultProps = {
    className: "",
};

export default SquadPlayerTable
