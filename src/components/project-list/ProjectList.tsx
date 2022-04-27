import { FC, useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { BarChartFill } from "react-bootstrap-icons";
import EmptyMessage from "../empty-message";
import Project from "../project";
import axios from "axios";

const ProjectList: FC = () => {
  const { rankingId } = useParams();
  const { state } = useContext(AppContext);
  const ranking = state.rankings.find(
    (ranking) => ranking.rankingId == rankingId
  );

  const send = {
    Projetos: [
      {
        CriterioA: 1,
        CriterioB: 2,
        CriterioC: 3,
        CriterioD: 4,
        CriterioE: 5,
        CriterioF: 6,
        CriterioG: 7,
        CriterioH: 8,
        Nome: "Projeto 1",
      },
    ],
  };
  const ranquear = (): void => {
    axios.post("https://localhost:7201", send);
  };

  return (
    <div className="d-flex gap-3 flex-wrap ">
      <Button
        onClick={() => ranquear()}
        variant="danger"
        className="px-3 d-flex align-items-center gap-2"
      >
        Ranquear <BarChartFill className="ml-3" />
      </Button>
      {!ranking ? (
        <EmptyMessage>Nenhum projeto foi encontrado</EmptyMessage>
      ) : ranking.projects.length ? (
        ranking.projects.map((project) => (
          <Project key={project.projectId} {...project} rankingId={rankingId} />
        ))
      ) : (
        <EmptyMessage>Nenhum projeto foi encontrado</EmptyMessage>
      )}
    </div>
  );
};

export default ProjectList;
