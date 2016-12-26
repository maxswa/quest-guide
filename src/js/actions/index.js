import request from "superagent";
import Papa from "papaparse";

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

export const receivePlayerStats = (stats) => {
    return {
        type: 'RECEIVE_PLAYER_STATS',
        stats: stats
    }
}

export const requestPlayerStats = (rsn) => (

    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    function (dispatch) {
        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.
        // In this case, we return a promise to wait for.
        return request.get('http://services.runescape.com/m=hiscore_oldschool/index_lite.ws')
            .accept('application/csv')
            .query({'player': rsn})
            .then(
                (response) => {
                    let foo = Papa.parse(response.text)
                    dispatch(receivePlayerStats({
                        rank: foo.data[1][0],
                        level: foo.data[1][1],
                        xp: foo.data[1][2]
                    }))
                },
                (reason) => {
                    console.log("Player Stats rejected for reason: " + reason)
                }
            )
    }
);

