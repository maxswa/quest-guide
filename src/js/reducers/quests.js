import { questData } from "../questData";

// export const questData = {
//     questFilter: '',
//     quests: [
//         {
//             id: 1,
//             name: "Animal Magnetism"
//         },
//         {
//             id: 2,
//             name: "Another Slice of H.A.M"
//         }
//             ... etc ...
// }

const quests = (state = questData, action) => {
    let newState = state;
    switch (action.type) {
        case 'GET_QUEST_LIST':
            break;
        case 'FILTER_QUEST_LIST':
            newState = Object.assign({}, state, {questFilter: action.filter});
            break;
        case 'SELECT_QUEST':
            console.log("You selected: " + action.id);
            break;
    }
    return newState;
}

export default quests
