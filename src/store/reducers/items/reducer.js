import initialState from './state';
import types from '../../actions/items/types';

export default function itemsReducer(state = initialState, action) {

    switch(action.type) {
        case types.SET_MASCOTA_ITEM:
            const itemMascota = state.sourceItems.find(item => item.id == action.payload);
            return Object.assign({}, state, {mascotaItem: itemMascota});

        default:
            return state;
    }

}