import React from "react";

const QuestList = ({quests, questFilter, onQuestFilterChange, onSelectQuest}) => {
    return (
        <div className="quest-list row">
            <div id="quest-filter" className="col-md-8 col-md-offset-2 col-xs-12">
                <input id="quest-filter-input"
                       type="text"
                       value={questFilter}
                       placeholder="Enter the name of a quest that you need help with"
                       onChange={onQuestFilterChange}
                />
            </div>
            {
                quests.map(q => {
                    return (
                        <div className="quest-summary row" key={q.id}>
                            <span className="quest-name col-md-4 col-xs-12">{q.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default QuestList;