import { FC, useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { BarChartFill } from "react-bootstrap-icons";
import EmptyMessage from "../empty-message";
import Project from "../project";
import axios from "axios";

const SetRanking = (projects) =>
  projects.map((project, index) => ({ ...project, position: index + 1 }));

const ProjectList: FC = () => {
  const { rankingId } = useParams();
  const { state, dispatch } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
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
        CriterioH: 10000,
        Nome: "Projeto 1",
      },
      {
        CriterioA: 1,
        CriterioB: 2,
        CriterioC: 3,
        CriterioD: 4,
        CriterioE: 5,
        CriterioF: 6,
        CriterioG: 7,
        CriterioH: 30000,
        Nome: "Projeto 2",
      },
      {
        CriterioA: 1,
        CriterioB: 2,
        CriterioC: 3,
        CriterioD: 4,
        CriterioE: 5,
        CriterioF: 6,
        CriterioG: 7,
        CriterioH: 40000,
        Nome: "Projeto 3",
      },
    ],
  };
  const ranquear = (): void => {
    setIsLoading(true);

    setTimeout(async () => {
      const res = await axios.post("https://localhost:7201", {
        Projetos: ranking.projects,
      });

      setIsLoading(false);

      const projectsByNumber = SetRanking(res.data.data);
      console.log(projectsByNumber);

      dispatch({ type: "LIST_RANKING", rankedProjects: projectsByNumber });
    }, 1500);
  };

  return (
    <div className="d-flex gap-3 flex-wrap ">
      <Button
        onClick={() => ranquear()}
        variant="danger"
        className="px-3 d-flex align-items-center gap-2"
        disabled={isLoading}
      >
        {isLoading ? "Ranqueando..." : "Ranquear"}{" "}
        <BarChartFill className="ml-3" />
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
