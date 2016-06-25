import React from "react";

const QuestList = ({quests, onSelectQuest}) => {
    return (
        <div className="quest-list">
            {
                quests.map(q => {
                    return (
                        <div className="quest-summary row" key={q.id}>
                            <span className="quest-name col-md-4 col-xs-12">{q.name}</span>
                            <span className="quest-description col-md-8 col-xs-12">{q.description}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default QuestList;