import request from "superagent";
import Papa from "papaparse";
import rsparse from "../lib/rsparse";

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

export const changeName = (rsn) => {
    return {
        type: 'CHANGE_NAME',
        rsn: rsn
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
                    rsparse(0, response.text)
                    dispatch(receivePlayerStats({
                        total: {
                            rank: foo.data[0][0],
                            level: foo.data[0][1],
                            xp: foo.data[0][2]
                        },
                        attack: {
                            rank: foo.data[1][0],
                            level: foo.data[1][1],
                            xp: foo.data[1][2]
                        },
                        defence: {
                            rank: foo.data[2][0],
                            level: foo.data[2][1],
                            xp: foo.data[2][2]
                        },
                        strength: {
                            rank: foo.data[3][0],
                            level: foo.data[3][1],
                            xp: foo.data[3][2]
                        },
                        hitpoints: {
                            rank: foo.data[4][0],
                            level: foo.data[4][1],
                            xp: foo.data[4][2]
                        },
                        ranged: {
                            rank: foo.data[5][0],
                            level: foo.data[5][1],
                            xp: foo.data[5][2]
                        },
                        prayer: {
                            rank: foo.data[6][0],
                            level: foo.data[6][1],
                            xp: foo.data[6][2]
                        },
                        magic: {
                            rank: foo.data[7][0],
                            level: foo.data[7][1],
                            xp: foo.data[7][2]
                        },
                        cooking: {
                            rank: foo.data[8][0],
                            level: foo.data[8][1],
                            xp: foo.data[8][2]
                        },
                        woodcutting: {
                            rank: foo.data[9][0],
                            level: foo.data[9][1],
                            xp: foo.data[9][2]
                        },
                        fletching: {
                            rank: foo.data[10][0],
                            level: foo.data[10][1],
                            xp: foo.data[10][2]
                        },
                        fishing: {
                            rank: foo.data[11][0],
                            level: foo.data[11][1],
                            xp: foo.data[11][2]
                        },
                        firemaking: {
                            rank: foo.data[12][0],
                            level: foo.data[12][1],
                            xp: foo.data[12][2]
                        },
                        crafting: {
                            rank: foo.data[13][0],
                            level: foo.data[13][1],
                            xp: foo.data[13][2]
                        },
                        smithing: {
                            rank: foo.data[14][0],
                            level: foo.data[14][1],
                            xp: foo.data[14][2]
                        },
                        mining: {
                            rank: foo.data[15][0],
                            level: foo.data[15][1],
                            xp: foo.data[15][2]
                        },
                        herblore: {
                            rank: foo.data[16][0],
                            level: foo.data[16][1],
                            xp: foo.data[16][2]
                        },
                        agility: {
                            rank: foo.data[17][0],
                            level: foo.data[17][1],
                            xp: foo.data[17][2]
                        },
                        thieving: {
                            rank: foo.data[18][0],
                            level: foo.data[18][1],
                            xp: foo.data[18][2]
                        },
                        slayer: {
                            rank: foo.data[19][0],
                            level: foo.data[19][1],
                            xp: foo.data[19][2]
                        },
                        farming: {
                            rank: foo.data[20][0],
                            level: foo.data[20][1],
                            xp: foo.data[20][2]
                        },
                        runecraft: {
                            rank: foo.data[21][0],
                            level: foo.data[21][1],
                            xp: foo.data[21][2]
                        },
                        hunter: {
                            rank: foo.data[22][0],
                            level: foo.data[22][1],
                            xp: foo.data[22][2]
                        },
                        construction: {
                            rank: foo.data[23][0],
                            level: foo.data[23][1],
                            xp: foo.data[23][2]
                        },
                        rsn: rsn
                    }))
                },
                (reason) => {
                    console.log("Player Stats rejected for reason: " + reason)
                }
            )
    }
);

