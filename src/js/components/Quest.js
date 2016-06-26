import React from "react";

const Quest = ({quest}) => {
    if (quest) {
        return (
            <div className="quest row">
                <div id="quest-name" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                    <h1>{quest.name}</h1>
                </div>
                <div id="quest-description" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                    <p>{quest.description}</p>
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

export default Quest;