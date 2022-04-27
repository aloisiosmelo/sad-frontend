import "./custom-theme.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import routes from "./routes";
import AppReducer from "./reducer";
import React, { FC, useEffect, useReducer } from "react";
import { useRoutes } from "react-router-dom";
import { Alert, Button, Modal } from "react-bootstrap";
import { createContext } from "react";
import Table from "./components/table";

export const AppContext = createContext();

const initialState = {
  firstTimeUser: true,
  rankings: [],
  rankedProjects: [],
  isFetching: false,
  rankingIdCounter: 0,
  isRankingModalOpened: false,
  isSucessModalOpened: false,
  innerModalFunction: undefined,
  isUserSureModalOpened: false,
};

function App() {
  const header = [
    {
      Header: "Prioridade",
      accessor: "rankingNumber",
    },
    {
      Header: "Projeto",
      accessor: "Nome",
    },
  ];

  const data = [
    {
      Nome: "Projeto 1",
      rankingNumber: "1",
    },
    {
      Nome: "Projeto 2",
      rankingNumber: "1",
    },
    {
      Nome: "Projeto 3",
      rankingNumber: "1",
    },
    {
      Nome: "Projeto 4",
      rankingNumber: "1",
    },
  ];

  const CloseAll: void = () => {
    dispatch({ type: "CLOSE_SUCESS" });
  };

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

      <Modal show={state.isSucessModalOpened} backdrop={true} onHide={CloseAll}>
        <Alert variant="success" className="mb-0">
          <Alert.Heading className="fw-normal">Sucesso!</Alert.Heading>
        </Alert>
      </Modal>

      <Modal
        show={state.isUserSureModalOpened}
        backdrop={true}
        onHide={CloseAll}
      >
        <Modal.Header closeButton>
          <Modal.Title>Você tem certeza que quer fazer isso?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Este documento será deletado permanentemente.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              dispatch({ type: "CLOSE_SUCESS" });
            }}
          >
            Cancelar
          </Button>
          {state.deletionType === "RANKING" ? (
            <Button
              variant="danger"
              onClick={() => state.innerModalFunction(state.deletingRankingId)}
            >
              Confirmar
            </Button>
          ) : (
            <Button
              variant="danger"
              onClick={() =>
                state.innerModalFunction(
                  state.deletingRankingId,
                  state.deletingProjectId
                )
              }
            >
              Confirmar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
      <Modal show={false} backdrop={true} onHide={CloseAll}>
        <Modal.Header closeButton>
          <Modal.Title>Projetos ranqueados</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Table columns={header} data={data} />
        </Modal.Body>
      </Modal>
    </AppContext.Provider>
  );
}

export default App;
