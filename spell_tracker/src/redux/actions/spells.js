import { ADD_SPELL, DELETE_SPELL, SEARCH_SPELL } from "../action-types/spells"

export const addSpell=(data)=>{
    return{
        type: ADD_SPELL,
        data,

    }
}

export const deleteSpell = (data) => {
    return {
        type: DELETE_SPELL,
        data,
    }
}

export const searchSpell = (query) => {
    return{
        type: SEARCH_SPELL,
        query,
    }
}