import { FC, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../App';
import EmptyMessage from '../empty-message';
import Project from '../project';


const ProjectList: FC = () => {
    const { rankingId } = useParams()
    const { state } = useContext(AppContext)
    const {projects} = state.rankings.find( ranking => ranking.rankingId == rankingId)
    

    
    

    return (
        <div className="d-flex gap-3 flex-wrap">
            {
                projects.length ? projects.map( project => (
                    <Project key={project.projectId} {...project} rankingId={rankingId}/>
                )) : <EmptyMessage>Nenhum projeto foi encontrado</EmptyMessage>
            }
        </div>
    )
};

export default ProjectList;