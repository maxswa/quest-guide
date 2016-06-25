export const getAllQuests = () => {
    return {
        type: 'GET_ALL_QUESTS'
    }
}

export const selectQuest = (questId) => {
    return {
        type: 'SELECT_QUEST',
        id: questId
    }
}


