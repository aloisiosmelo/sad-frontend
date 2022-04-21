import "./custom-theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import routes from "./routes";
import AppReducer from "./reducer";
import React, { FC, useEffect, useReducer } from "react";
import { useRoutes } from "react-router-dom";
import { Alert, Button, Modal } from "react-bootstrap";
import { createContext } from "react";
import Project from "./components/project";

export const AppContext = createContext();

const initialState = {
  firstTimeUser: true,
  rankings: [],
  isFetching: false,
  rankingIdCounter: 0,
  isRankingModalOpened: false,
  isSucessModalOpened: false,
  innerModalFunction: undefined,
  isUserSureModalOpened: false,
};

function App() {
  const element = useRoutes(routes);

  const [state, dispatch] = useReducer(
    AppReducer,
    JSON.parse(localStorage.getItem("sad")) || initialState
  );

  useEffect(() => {
    localStorage.setItem("sad", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">{element}</div>

      <Modal
        show={state.isSucessModalOpened}
        onClick={() => dispatch({ type: "CLOSE_SUCESS" })}
      >
        <Alert variant="success" className="mb-0">
          <Alert.Heading className="fw-normal">Sucesso!</Alert.Heading>
        </Alert>
      </Modal>

      <Modal show={state.isUserSureModalOpened}>
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza que quer fazer isso?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Este documento será deletado permanentemente.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="danger">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </AppContext.Provider>
  );
}

export default App;
