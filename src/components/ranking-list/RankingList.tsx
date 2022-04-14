import { FC, useContext } from "react";
import Ranking from "../ranking";
import { AppContext } from '../../App';

const RankingList: FC = () => {

    const {state} = useContext(AppContext)
    return (
        <div className="d-flex gap-3 flex-wrap">
            {
                state.rankings.map( (ranking, index) => (
                    <Ranking key={index} id={index} />
                ))
            }
        </div>
    )

}

export default RankingList