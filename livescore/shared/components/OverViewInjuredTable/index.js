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
                        <th>ชื่อนักเตะ</th>
                        <th>อาการ</th>
                        <th>วันที่เริ่ม</th>
                        <th>วันที่หาย</th>
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
                                        src={""}
                                        alt={play["@name"]}
                                        className="mr-3"
                                    />
                                    <span>{play["@name"]}</span>
                                </td>
                                
                                <td>{play["@description"]}</td>
                                <td>{play["@startdate"]}</td>
                                <td>{play["@enddate"]}</td>
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
