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
  const { projects } = state.rankings.find(
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
    fetch("http://localhost:5201", {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
      {projects.length ? (
        projects.map((project) => (
          <Project key={project.projectId} {...project} rankingId={rankingId} />
        ))
      ) : (
        <EmptyMessage>Nenhum projeto foi encontrado</EmptyMessage>
      )}
    </div>
  );
};

export default ProjectList;
