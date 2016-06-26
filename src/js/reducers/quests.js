import { questData } from "../questData";

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
    }
    return newState;
}

export default quests
