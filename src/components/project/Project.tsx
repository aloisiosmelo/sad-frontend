import { FC, useContext } from 'react'
import { X } from 'react-bootstrap-icons'
import { AppContext } from '../../App'


const Project: FC = ({rankingId, Nome, projectId}) => {
    const { dispatch } = useContext(AppContext)

    
    const deleteProject = () => dispatch({type: 'REMOVE_PROJECT', rankingId: parseInt(rankingId), projectId: parseInt(projectId)})
    
    return (
        <div className="bg-danger w-75 rounded-2 d-flex p-2 align-items-center text-light">
            <span 
                style={{width: '30px', height: '30px'}} 
                className="d-flex justify-content-center align-items-center bg-light rounded-circle p-4 justify-self-baseline text-dark">
                    2
            </span>
            <p className="px-3 m-0">{Nome}</p>
            <X  

                onClick={deleteProject}
                style={{marginLeft: 'auto'}} 
                className="ml-auto" 
                size={30}
            />  
        </div>
    )
}

export default Project