import { combineReducers, createStore } from 'redux'
import { spellReducer } from '../reducers/expenses'

const reducer = combineReducers({
    spells: spellReducer,
})
const initialState={}
const store = createStore(reducer, initialState)

export default store