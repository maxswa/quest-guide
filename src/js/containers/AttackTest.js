import { connect } from "react-redux";
import Attack from "../components/Attack";
import { requestPlayerStats } from "../actions";

const mapStateToProps = (state) => {
    return {
        attack: state.attack
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPlayerNameChange: (event) => {
            dispatch(requestPlayerStats(event.target.value))
        }
    }
}

const AttackTest = connect(mapStateToProps, mapDispatchToProps)(Attack);

export default AttackTest
