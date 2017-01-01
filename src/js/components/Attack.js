import React from "react";

const Attack = ({attack, onPlayerNameChange}) => {
    if (attack) {
        return (
            <div id="attack-filter" className="col-md-10 col-md-offset-1 col-xs-12">
                <input id="attack-filter-input"
                       type="text"
                       value={attack.rsn}
                       placeholder="Enter a player name"
                       onChange={onPlayerNameChange}
                />
                <div className="attack row">
                    <div id="attack-level" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                        <h1>{attack.agility.rank} {attack.agility.level} {attack.agility.xp}</h1>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div />
        )
    }
};

export default Attack;