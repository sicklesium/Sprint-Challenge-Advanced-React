import React from 'react';

const PlayerCard = (props) => {
    return (
        <div className="players-container">
            <div className="players-card">
                {props.players.map(player => (
                    <div key={player.id} className="card">
                        <p>Name: {player.name}</p>
                        <p>Country: {player.country}</p>
                        <p># of searches: {player.searches}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default PlayerCard;