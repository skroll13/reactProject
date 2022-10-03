import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'
import {spellReducer} from './redux/reducers/spells'
import Header from './components/header/index'
import Home from './pages/home/index'
import AddSpell from './pages/addSpell/index'


const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, spellReducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
let persistor = persistStore(store)
const App = () => {



  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router>
          {/* <Header> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/addSpell" element={<AddSpell />} />  
            </Routes>
          {/* </Header> */}
      </Router>
      </PersistGate>
    </Provider>
  )
}
export default App
