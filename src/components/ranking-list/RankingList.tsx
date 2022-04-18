import { FC, useContext } from "react";
import Ranking from "../ranking";
import { AppContext } from '../../App';

const RankingList: FC = () => {

    const {state} = useContext(AppContext)
    console.log(state)
    return (
        <div className="d-flex gap-3 flex-wrap">
            {
                state.rankings.map( (ranking, index) => (
                    <Ranking ranking={ranking} key={index} id={index} />
                ))
            }
        </div>
    )

}

export default RankingList