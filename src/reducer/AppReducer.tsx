const initialState = {
  firstTimeUser: true,
  rankings: [],
  isFetching: false,
  rankingIdCounter: 0,
  isRankingModalOpened: false,
  isSucessModalOpened: false,
  innerModalFunction: undefined,
  isUserSureModalOpened: true,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_RANKING":
      return {
        ...state,
        rankings: [
          ...state.rankings,
          {
            rankingId: state.rankingIdCounter,
            projectIdCounter: 0,
            title: action.rankingName,
            date: action.date,
            projects: [],
          },
        ],
        rankingIdCounter: state.rankingIdCounter + 1,
        isSucessModalOpened: true,
      };

    case "REMOVE_RANKING":
      return {
        ...state,
        rankings: state.rankings.filter(
          (ranking) => ranking.rankingId !== action.rankingId
        ),
        isSucessModalOpened: true,
        isUserSureModalOpened: false,
      };

    case "CREATE_PROJECT":
      console.log(action);

      return {
        ...state,
        rankings: state.rankings.map((ranking) =>
          ranking.rankingId !== action.rankingId
            ? ranking
            : {
                ...ranking,
                projectIdCounter: ranking.projectIdCounter + 1,
                projects: [
                  ...ranking.projects,
                  { ...action.project, projectId: ranking.projectIdCounter },
                ],
              }
        ),
        isSucessModalOpened: true,
      };

    case "REMOVE_PROJECT":
      return {
        ...state,
        rankings: state.rankings.map((ranking) =>
          ranking.rankingId !== action.rankingId
            ? ranking
            : {
                ...ranking,
                projects: ranking.projects.filter(
                  (project) => project.projectId !== action.projectId
                ),
              }
        ),
        isSucessModalOpened: true,
        isUserSureModalOpened: false,
      };

    case "IS_USER_SURE":
      return {
        ...state,
        isUserSureModalOpened: true,
        innerModalFunction: action.confirmFunction,
      };

    case "CLOSE_SUCESS":
      return {
        ...state,
        isSucessModalOpened: false,
      };
    default:
      return { ...state };
  }
};

export default AppReducer;
