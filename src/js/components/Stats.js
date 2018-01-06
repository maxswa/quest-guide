import React from "react";
import {requestPlayerStats} from "../actions";

const Stats = ({stats, onPlayerNameChange, onPlayerNameSubmit}) => {

    const apiOrder = {
        total: 0,
        attack: 1,
        defence: 2,
        strength: 3,
        hitpoints: 4,
        ranged: 5,
        prayer: 6,
        magic: 7,
        cooking: 8,
        woodcutting: 9,
        fletching: 10,
        fishing: 11,
        firemaking: 12,
        crafting: 13,
        smithing: 14,
        mining: 15,
        herblore: 16,
        agility: 17,
        thieving: 18,
        slayer: 19,
        farming: 20,
        runecraft: 21,
        hunter: 22,
        construction: 23
    };
    const skillOrder = [
        "attack",
        "hitpoints",
        "mining",
        "strength",
        "agility",
        "smithing",
        "defence",
        "herblore",
        "fishing",
        "ranged",
        "thieving",
        "cooking",
        "prayer",
        "crafting",
        "firemaking",
        "magic",
        "fletching",
        "woodcutting",
        "runecraft",
        "slayer",
        "farming",
        "construction",
        "hunter",
        "total"
    ];
    if (stats) {
        let input
        return (
            <div id="attack-filter" className="col-md-10 col-md-offset-1 col-xs-12">
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    onPlayerNameSubmit(input.value)
                    }}>
                    <input ref={(node) => {
                        input = node
                    }}/>
                </form>
                <h1>{stats.rsn}</h1>
                <div id="skillGrid">
                    {
                        skillOrder.map((skill) => {
                            return (
                                <div className="skillTile">
                                    <img className="icon" src={"./assets/images/skills/" + skill + ".svg"} alt={skill}/>
                                    <h3>{stats[skill].level}</h3>
                                </div>
                            )
                        })
                    }
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

export default Stats;

// <div className="attack row">
//     <div id="attack-level" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
//         <h1>{stats.agility.level}</h1>
//     </div>
// </div>
// <div className="attack row">
//     <div id="attack-level" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
//         <h1>{stats.thieving.level}</h1>
//     </div>
// </div>
