const AppReducer = (state, action) => {


    switch(action.type) {

        case 'CREATE_RANKING':
            return {...state, rankings: [...state.rankings, action.newRanking], rankingIdCounter: state.rankingIdCounter +1}
        
        case 'REMOVE_RANKING':
            return {...state, rankings: state.rankings.filter( ranking => ranking.id !== action.rankingId)}
        
        case 'CREATE_PROJECT':
            return {...state, rankings: [...state.rankings.map( ranking => ranking.id !== action.rankingId ? ranking : {...ranking, projects: [...ranking.projects, action.project]})]}
        
        case 'REMOVE_PROJECT':
            return {...state, rankings: [...state.rankings.map( ranking => ranking.id !== action.rankingId ? ranking : {...ranking, projects: [...ranking.projects.filter(project => project.id !== action.projectId )]})]}
        case 'INCREASE_COUNTER':
            return {...state, rankingIdCounter: state.rankingIdCounter + 1}
        default:
            return {...state}
    }


}

export default AppReducer;