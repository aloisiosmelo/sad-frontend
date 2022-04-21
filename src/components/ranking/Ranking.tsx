import { FC } from "react";
// useState
import { Button, Modal } from "react-bootstrap";
// Row, Col, Modal, Form, ButtonGroup
import { X } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Ranking: FC = ({ ranking }) => {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const goToRankingDetails = () =>
    navigate(`/dashboard/ranking-detail/ranking/${ranking.rankingId}`);

  const deleteRanking = (id) => {
    console.log("did it");
    dispatch({ type: "REMOVE_RANKING", rankingId: id });
  };

  const youSure = () =>
    dispatch({
      type: "IS_USER_SURE",
      innerModalFunction: deleteRanking,
      deletingRankingId: ranking.rankingId,
      deletionType: "RANKING",
    });

  return (
    <div className="d-flex flex-column bg-danger p-3 rounded text-white justify-content-start align-items-start">
      <X
        onClick={youSure}
        style={{ cursor: "pointer" }}
        size={30}
        className="align-self-end"
      />
      <p className="fs-5 fw-semibold mb-0">{ranking.title}</p>

      <span className="fw-light mb-3">Criado em {ranking.date}</span>

      <Button
        onClick={goToRankingDetails}
        variant="light"
        className="px-4 text-danger"
      >
        Abrir
      </Button>
    </div>
  );
};

export default Ranking;
