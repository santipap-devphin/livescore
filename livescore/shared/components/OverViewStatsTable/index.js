import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "../../commons/Avatar"
import { OverViewStatsTableStyle } from "./style"

const OverViewStatsTable = ({ players, title }) => {
    return (
        <OverViewStatsTableStyle>
            <div className="table-responsive mb-3">
            <table className="table table-bordered table-striped">
                <caption className="text-white">{title}</caption>
                <thead>
                    <tr>
                        {/* <th className="text-center" scope="col">#</th> */}
                        <th className="text-center" scope="col">Leaguge</th>
                        <th className="text-center" scope="col">Apps</th>
                        <th className="text-center" scope="col">Goals</th>
                        <th className="text-center" scope="col">Shots pg</th>
                        <th className="text-center" scope="col">Discipline</th>
                        <th className="text-center" scope="col">Possession%</th>
                        <th className="text-center" scope="col">Pass%</th>
                    </tr>
                </thead>
                <tbody>
                    {/*console.log(players)*/}
                    {
                        players.map((player, index) => (
                            
                            <tr key={index.toString()}>
                                <td className="py-1 px-2">
                                    <Avatar
                                        size={30}
                                        shape="circle"
                                        src={player.img}
                                        alt={player['@name']}
                                        className="mr-2"
                                    />
                                     {/*console.log(player)*/}
                                    <span>{player['@name']}</span>
                                </td>

                                <td className="text-center">{player['@appearences']}</td>
                                <td className="text-center">{player['@goals']}</td>
                                <td className="text-center">8</td>
                                <td className="text-center">
                                    <div className="discipline">
                                        <span className="span-left">1</span>
                                        <span className="span-right ml-1">3</span>
                                    </div>
                                </td>
                                <td className="text-center">59.0</td>
                                <td className="text-center">{player['@passes']}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot className='table-borderless'>
                    <tr>
                        <td className="py-1 px-2">
                            <span>Total / Average :</span>
                        </td>
                        <td className="text-center">3</td>
                        <td className="text-center">9</td>
                        <td className="text-center">8</td>
                        <td className="text-center">1 0</td>
                        <td className="text-center">59.0</td>
                        <td className="text-center">0.01</td>
                    </tr>

                </tfoot>
            </table>
            </div>
        </OverViewStatsTableStyle>
    )
}

OverViewStatsTable.propTypes = {
    players: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default OverViewStatsTable
