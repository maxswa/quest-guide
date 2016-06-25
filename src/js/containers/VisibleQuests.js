import { connect } from "react-redux";
import { selectQuest } from "../actions";
import QuestList from "../components/QuestList";

const mapStateToProps = (state) => {
    return {
        quests: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectQuest: (questId) => {
            dispatch(selectQuest(questId))
        }
    }
}

const VisibleQuests = connect(mapStateToProps, mapDispatchToProps)(QuestList);

export default VisibleQuests
