import types from './types';

export const setMascotaItem = id => ({
    type: types.SET_MASCOTA_ITEM,
    payload: id
})