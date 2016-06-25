import { connect } from "react-redux";
import { filterQuestList, selectQuest } from "../actions";
import QuestList from "../components/QuestList";

const mapStateToProps = (state) => {
    return {
        quests: getFilteredList(state.quests, state.questFilter),
        questFilter: state.questFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onQuestFilterChange: (event) => {
            dispatch(filterQuestList(event.target.value))
        },
        onSelectQuest: (questId) => {
            dispatch(selectQuest(questId))
        }
    }
}

const getFilteredList = (questList, filter) => {
    return filter ? questList.filter(q => q.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0) : questList;
}

const VisibleQuests = connect(mapStateToProps, mapDispatchToProps)(QuestList);

export default VisibleQuests
