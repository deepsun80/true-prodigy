import { combineReducers } from 'redux';
import PropsReducer from './PropsReducer';
import SelectedPropReducer from './SelectedPropReducer';

const rootReducer = combineReducers({
    properties: PropsReducer,
    selectedProperty: SelectedPropReducer,
});

export default rootReducer;