import { questData } from "../questData";

const quests = (state = questData, action) => {
    let newState = state;
    switch (action.type) {
        case 'GET_QUEST_LIST':
            break;
        case 'SELECT_QUEST':
            console.log("You selected: " + action.id);
            break;
    }
    return newState;
}

export default quests
