export const makeChange = (purchaseAmount, tenderedAmount) => {
    return {
        type: 'GET_QUEST_LIST',
        purchaseAmount: Number(purchaseAmount),
        tenderedAmount: Number(tenderedAmount)
    }
}

export const readFile = (file) => {
    return {
        type: 'READ_FILE',
        textFile: file
    }
}

export const makeBulkChange = () => {
    return {
        type: 'MAKE_BULK_CHANGE'
    }
}

