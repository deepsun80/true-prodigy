import { GET_PROP_INFO } from '../actions';

const initProp = {
    results: [{
        PropID: 'undefined',
        PropZoningCd: 'undefined',
        PropNbhdNm: 'underfined',
        TotalMarketVal: 'undefined',
    }]
}

export default (selectedProp = initProp, action) => {
    switch(action.type) {
        case GET_PROP_INFO:
            return action.payload.data;
        default:
            return selectedProp;
    }
};