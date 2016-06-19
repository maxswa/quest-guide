import {readFile, parseFile} from "../utilities/fileio";

// TODO - cheating on asynchronous file read as an expedient to avoid redux-thunk.
let changeInputs = [];
// let changeInputs = [{purchaseAmount: 2.36, tenderedAmount: 5.00}, {purchaseAmount: 10.85, tenderedAmount: 10.00}, {purchaseAmount: 43.17, tenderedAmount: 50.00}];

const quests = (state = [
    {
           "name":"Monkey Madness",
           "id":12345,
           "steps":[{
               "id":23456,
               "number":1,
               "description":"Go to Ape Atoll and collect a gree gree."
           },
           {
                "id":23457,
               "number":2,
               "description":"Leave Ape Atoll."
           }],
           "description":"The King of the northern Gnomes, Narnode Shareen, is once again in need of your help. He recently decided to send an envoy of his Royal Guard, the 10th squad, to oversee the decommissioning of the Gnome owned ship-building facilities on the eastern coast of Karamja. It has been quite some time since the 10th squad were dispatched and they have been deemed missing in action. It will be up to you, should you decide to help, to find out what fate befell the 10th squad and if possible, track them down. If only it were so simple. Sinister forces have begun to spread through the Gnome hierarchy and threaten to unleash an unknown terror upon the world. Far across the land, the fires of vengeance are being stoked once again. Can you unravel the mystery behind the deception? Can you separate the truth from the lies? Can you decide for yourself what is real and what is not?",
           //Prereqs are Grand Tree and Tree Gnome Village.
           "preReqs":[],
           "skillReqs":[],
           //Item reqs are a gold bar, ball of wool, and monkey bones
           "itemReqs":[],
        "difficulty":"Master",
        "members":1
    }
]
, action) => {
    let newState = state;
    switch (action.type) {
        case 'GET_QUEST_LIST':
            newState = state;
            break;
    }
    return newState;
}

export default quests
