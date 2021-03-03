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
                        <th>Number</th>
                        <th>appearences</th>
                        <th>goal</th>
                        <th>rating</th>
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
                                        alt={play["@name"]}
                                        className="mr-3"
                                    />
                                    <span>{play["@name"]}</span>
                                </td>
                                <td>{play["@age"]}</td>
                                <td>{play["@number"]}</td>
                                <td>{play["@appearences"]}</td>
                                <td>{play["@goals"]}</td>
                                <td>{play["@rating"]}</td>
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
