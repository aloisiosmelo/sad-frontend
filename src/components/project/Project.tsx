import { FC, useContext } from "react";
import { X } from "react-bootstrap-icons";
import { AppContext } from "../../App";

const Project: FC = ({ rankingId, Nome, projectId }) => {
  const { dispatch } = useContext(AppContext);

  const deleteProject = (rankId, projId) =>
    dispatch({
      type: "REMOVE_PROJECT",
      rankingId: parseInt(rankId),
      projectId: parseInt(projId),
    });

  const youSure = () =>
    dispatch({
      type: "IS_USER_SURE",
      innerModalFunction: deleteProject,
      deletingRankingId: rankingId,
      deletingProjectId: projectId,
      deletionType: "PROJECT",
    });
  return (
    <div className="bg-danger w-100 rounded-2 d-flex p-2 align-items-center text-light">
      <p className="px-3 m-0">{Nome}</p>
      <X
        onClick={youSure}
        style={{ marginLeft: "auto", cursor: "pointer" }}
        className="ml-auto"
        size={30}
      />
    </div>
  );
};

export default Project;
