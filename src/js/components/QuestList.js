import React from "react";

const QuestList = ({quests, questFilter, onQuestFilterChange, onSelectQuest}) => {
    return (
        <div className="quest-list row">
            <div id="quest-filter" className="col-md-10 col-md-offset-1 col-xs-12">
                <input id="quest-filter-input"
                       type="text"
                       value={questFilter}
                       placeholder="Enter the name of a quest that you need help with"
                       onChange={onQuestFilterChange}
                />
            </div>
            <div id="quest-summaries" className="col-md-10 col-md-offset-1 col-xs-12">
                <div id="quest-summaries-scrollable">
                    {
                        quests.map(q => {
                            return (
                                <div className="quest-summary" key={q.id} onClick={() => onSelectQuest(q.id)}>
                                    <span className="quest-name">{q.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default QuestList;