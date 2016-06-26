import { connect } from "react-redux";
import Quest from "../components/Quest";

const mapStateToProps = (state) => {
    return {
        quest: getSelectedQuest(state.quests, state.selectedQuestId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const getSelectedQuest = (questList, questId) => {
    return questList.find((quest) => (quest.id === questId));
}

const QuestDetail = connect(mapStateToProps, mapDispatchToProps)(Quest);

export default QuestDetail
