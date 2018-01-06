import {connect} from "react-redux";
import Stats from "../components/Stats";
import * as actions from "../actions";

const mapStateToProps = (state) => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayerNameChange: (event) => {
            dispatch(actions.changeName(event.target.value))
            // dispatch(requestPlayerStats(event.target.value))
        },
        onPlayerNameSubmit: (evt) => {
            dispatch(actions.requestPlayerStats(evt))
        }
    }
}

// const onNameChange = (event) => {
//     changeName(event.target.value)
// }

const GetStats = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default GetStats
