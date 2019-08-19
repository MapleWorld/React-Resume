import Skills from '../components/skills';
import * as actions from '../../presentation/actions/';
import { StoreState } from '../../infrastructure/types';
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapDispatchToProps(dispatch: Dispatch < actions.EnthusiasmAction > ) {
    return {};
}

export default connect(null, mapDispatchToProps)(Skills);