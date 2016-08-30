
import { connect } from 'react-redux';

import Calc from '../../components/calc/Calc';
import { setXp, setStartDate, setGoal } from '../../actions/calc';

const mapStateToProps = (state) => {
    return {
        xp : state.calc.xp,
        dateStr : state.calc.dateStr,
        date : state.calc.date,
        goal : state.calc.goal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setXp : (xp) => {
            dispatch(setXp(xp))
        },
        setStartDate : (dateStr) => {
            dispatch(setStartDate(dateStr))
        },
        setGoal : (level) => {
            dispatch(setGoal(level))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calc);