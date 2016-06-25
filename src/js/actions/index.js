export const getAllQuests = () => {
    return {
        type: 'GET_ALL_QUESTS'
    }
}

export const filterQuestList = (filter) => {
    return {
        type: 'FILTER_QUEST_LIST',
        filter: filter
    }
}

export const selectQuest = (questId) => {
    return {
        type: 'SELECT_QUEST',
        id: questId
    }
}


