import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "../Avatar"
import {TopPlayerStyle} from "./style"

const TopPlayer = ({players, title}) => {
    return (
        <TopPlayerStyle>
            <table className="table">
                <caption className="text-white">{title}</caption>
                <thead>
                    <tr>
                    <th className="text-center" scope="col">#</th>
                    <th scope="col">Players</th>
                    <th scope="col">Matchs</th>
                    <th scope="col">Goals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index.toString()}>
                                <td className="py-1 px-2">
                                    <img 
                                        width={30}
                                        height={30}
                                        src={player.img}
                                        alt={player.name} 
                                        className="rounded-circle mx-2"
                                    />
                                </td>
                                <td className="text-left">{player.name}</td>
                                <td className="text-center">{player.matchs}</td>
                                <td className="text-center">{player.goals}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </TopPlayerStyle>
    )
}

TopPlayer.propTypes = {
    players: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default TopPlayer
