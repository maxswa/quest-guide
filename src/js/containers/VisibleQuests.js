import {connect} from "react-redux";
import {makeChange} from "../actions";
import CashRegister from "../components/CashRegister";

const mapStateToProps = (state) => {
    return []
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMakeChange: (purchaseAmount, tenderedAmount) => {
            dispatch(makeChange(purchaseAmount, tenderedAmount))
        }
    }
}

const CashRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(CashRegister);

export default CashRegisterContainer
