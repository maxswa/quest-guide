import {connect} from "react-redux";
import Stats from "../components/Stats";
import {requestPlayerStats} from "../actions";

const mapStateToProps = (state) => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayerNameChange: (event) => {
            dispatch(requestPlayerStats(event.target.value))
        }
    }
}

const GetStats = connect(mapStateToProps, mapDispatchToProps)(Stats);

export default GetStats
