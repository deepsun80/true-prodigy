import { GET_PROPS } from '../actions';

const initProps = {
    results: []
}

export default (properties = initProps, action) => {
    switch(action.type) {
        case GET_PROPS:
            return action.payload.data;
        default:
            return properties;
    }
};