import Home from '../components/index';
import * as actions from '../../presentation/actions/';
import { StoreState } from '../../infrastructure/types';
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch < actions.EnthusiasmAction > ) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);