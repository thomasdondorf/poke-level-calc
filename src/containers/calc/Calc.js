
import { connect } from 'react-redux';

import Calc from '../../components/calc/Calc';
import { setXp, setStartDate } from '../../actions/calc';

const mapStateToProps = (state) => {
    return {
        xp : state.calc.xp,
        dateStr : state.calc.dateStr,
        date : state.calc.date
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setXp : (xp) => {
            dispatch(setXp(xp))
        },
        setStartDate : (dateStr) => {
            dispatch(setStartDate(dateStr))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calc);