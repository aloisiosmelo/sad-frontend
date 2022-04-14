import './custom-theme.scss'
import  React, { FC, useReducer } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { createContext } from 'react';
import AppReducer from './app-reducer';


export const AppContext = createContext()

const initialState = {
  firstTimeUser: true,
  rankings: [{
      title: 'Ranking title',
      projects: []
  }],
  isFetching: false,
  rankingIdCounter: 0

}




function App() {
  
  const element = useRoutes(routes)
  const [state, dispatch ] = useReducer(AppReducer, initialState)

  return (
    <AppContext.Provider value={{state, dispatch}}> 
      <div className="App">
        {element }
      </div>
    </AppContext.Provider>
    
      
  );
}

export default App;
