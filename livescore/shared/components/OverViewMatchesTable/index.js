import React, { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import Avatar from "../../commons/Avatar"
import { OverViewMatchesTableStyle } from "./style"
import DatePicker from "react-datepicker";

const OverViewMatchesTable = ({ className, plyers }) => {
    const [startDate, setStartDate] = useState(new Date());
    const ref = React.createRef()
    const previousClick = ()=> {
        console.log('previous')
    }
    
    const nextClick = ()=> {
        console.log('next')
    }
    const CustomInput = forwardRef(({ onClick, value }, ref) => (
        <button ref={ref} className="btn btn-link text-white border-0 text-decoration-none" onClick={onClick}>
        {value}
        </button>
    ))

    return (
        <OverViewMatchesTableStyle className={`table-responsive mb-3 ${className}`}>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th colSpan="4">
                            <span>Matches</span>

                            <DatePicker
                                className="ml-2"
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                dateFormat="( MMM yyyy ▾ )"
                                showMonthYearPicker
                                showFullMonthYearPicker
                                customInput={<CustomInput ref={ref} />}
                            />
                        </th>
                        <th>
                            <button className='btn-click' onClick={previousClick}>Previous </button>
                            <span>| </span>
                            <button className='btn-click' onClick={nextClick}> Next</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                       
                      /* Array.isArray(plyers) ? 
                       plyers.map((play, index) => (
                               <tr key={index.toString()}>
                                    <td>29 Sep 02:00</td>
                                    <td>English Premier League</td>
                                    <td>
                                        <span>Liverpool</span>
                                        <Avatar
                                            size={30}
                                            shape="square"
                                            src={play.img}
                                            alt={play["@name"]}
                                            className="ml-2"
                                        />
                                    </td>
                                    <td>3 - 1</td>
                                    <td>
                                        
                                        <Avatar
                                            size={30}
                                            shape="square"
                                            src={play.img}
                                            alt={play["@name"]}
                                            className="mr-2"
                                        />
                                        <span>Arsenal FC</span>
                                    </td>
                                </tr>
                       )) 
                       : 
                       <>
                        <tr key={0}>
                                    <td>29 Sep 02:00</td>
                                    <td>English Premier League</td>
                                    <td>
                                        <span>Liverpool</span>
                                        <Avatar
                                            size={30}
                                            shape="square"
                                            src={play.img}
                                            alt={play.name}
                                            className="ml-2"
                                        />
                                    </td>
                                    <td>3 - 1</td>
                                    <td>
                                        
                                        <Avatar
                                            size={30}
                                            shape="square"
                                            src={play.img}
                                            alt={play.name}
                                            className="mr-2"
                                        />
                                        <span>Arsenal FC</span>
                                    </td>
                                </tr>
                       </>*/
                   }
                   
                </tbody>
            </table>
        </OverViewMatchesTableStyle>
    )
}

OverViewMatchesTable.propTypes = {
    className: PropTypes.string,
    plyers: PropTypes.array.isRequired,
    
}
OverViewMatchesTable.defaultProps = {
    className: "",
};

export default OverViewMatchesTable
