import './custom-theme.scss'
import  React, { FC, useEffect, useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppReducer from './reducer';




export const AppContext = createContext()

const initialState = {
  firstTimeUser: true,
  rankings: [],
  isFetching: false,
  rankingIdCounter: 0

}



function App() {

  const element = useRoutes(routes)

  const [state, dispatch ] = useReducer(AppReducer, JSON.parse(localStorage.getItem('sad')) || initialState)

  useEffect(() => {
    localStorage.setItem('sad', JSON.stringify(state))
    console.log(state)
  }, [state])

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="App">
        {element }
      </div>
    </AppContext.Provider>
  );
}

export default App;
