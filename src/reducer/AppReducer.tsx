

const AppReducer = (state, action) => {
    switch(action.type) {

        case 'CREATE_RANKING':
            return {
                ...state, 
                rankings: [
                    ...state.rankings, 
                    {

                        rankingId: state.rankingIdCounter,
                        projectIdCounter: 0, 
                        title: action.rankingName,
                        date: action.date, 
                        projects: [] 
                    }
                ], 
                rankingIdCounter: state.rankingIdCounter +1
        }
        
        case 'REMOVE_RANKING':
            return {
                ...state, 
                rankings: state.rankings.filter( ranking => ranking.rankingId !== action.rankingId)
            }
        
        case 'CREATE_PROJECT':
            return {
                ...state, 
                rankings: state.rankings.map( ranking => ranking.rankingId !== action.rankingId ? ranking : {...ranking, projectIdCounter: ranking.projectIdCounter + 1, projects: [...ranking.projects, {...action.project, projectId: ranking.projectIdCounter}]} )
                    
            }
        
        case 'REMOVE_PROJECT':
            
            return {
                ...state,
                rankings: state.rankings.map( ranking => ranking.rankingId !== action.rankingId ? ranking : {...ranking, projects: ranking.projects.filter( project => project.projectId !== action.projectId)})
            }
        default:
            return {...state}

    }
    
}

export default AppReducer;