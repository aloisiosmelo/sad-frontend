import { FC, useContext } from "react";
import Ranking from "../ranking";
import { AppContext } from "../../App";
import EmptyMessage from "../empty-message";

const RankingList: FC = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="d-flex gap-3 flex-wrap">
      {state.rankings.length ? (
        state.rankings.map((ranking, index) => (
          <Ranking ranking={ranking} key={index} id={index} />
        ))
      ) : (
        <EmptyMessage>Nenhum ranking foi adicionado</EmptyMessage>
      )}
    </div>
  );
};

export default RankingList;
