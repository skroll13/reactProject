import { json } from "react-router-dom";
import { ADD_SPELL, DELETE_SPELL, SEARCH_SPELL } from "../action-types/spells";

const initialList=() =>{
    const list = localStorage.getItem("spells-list")
    let spells = [];
    if(list){
        spells = JSON.parse(list)
    }
    return spells
}
const initialState = {
    spellList: initialList(),
    query: "",
};

export const spellReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SPELL:{
            localStorage.setItem("spells-list", JSON.stringify([...state.spellList, action.data]))
            return{
                ...state,
                spellList:[...state.spellList, action.data],
            }
        }
        case DELETE_SPELL:{
            const { data } = action;
            const updatedList = state.spellList.filter(   
                item => item.createdAt !== data.createdAt
            );
            localStorage.setItem("spells-list", JSON.stringify(updatedList))
            return{
                ...state,
                spellList: updatedList
            }
        }
        case SEARCH_SPELL:{
            const{query} = action
            return{
                ...state,
                query,
            }
        }
        default: 
            return state;
    }
}