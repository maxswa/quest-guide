import {questData} from "../questData";

const quests = (state = questData, action) => {
    let newState = state;
    switch (action.type) {
        case 'GET_QUEST_LIST':
            break;
        case 'FILTER_QUEST_LIST':
            newState = Object.assign({}, state, {questFilter: action.filter});
            break;
        case 'SELECT_QUEST':
            newState = Object.assign({}, state, {selectedQuestId: action.id});
            break;
        case 'RECEIVE_PLAYER_STATS':
            newState = Object.assign({}, state, {stats: action.stats});
            break;
        case 'CHANGE_NAME':
            newState = Object.assign({}, state, {rsn: action.rsn});
            break;
    }
    return newState;
}

export default quests
