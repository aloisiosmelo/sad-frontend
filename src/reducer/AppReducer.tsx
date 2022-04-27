const initialState = {
  firstTimeUser: true,
  rankings: [],
  isFetching: false,
  rankingIdCounter: 0,
  isRankingModalOpened: false,
  isSucessModalOpened: false,
  innerModalFunction: undefined,
  isUserSureModalOpened: true,
  deletingRankingId: undefined,
  deletingProjectId: undefined,
  deletionType: undefined,
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
        innerModalFunction: action.innerModalFunction,
        deletionType: action.deletionType,
        deletingRankingId: action.deletingRankingId,
        deletingProjectId: action.deletingProjectId,
      };

    case "CLOSE_SUCESS":
      // isSucessModalOpened: false,
      // innerModalFunction: undefined,
      // isUserSureModalOpened: true,
      // deletingRankingId: undefined,
      // deletingProjectId: undefined,
      // deletionType: undefined,
      return {
        ...state,
        isSucessModalOpened: false,
        isUserSureModalOpened: false,
        innerModalFunction: undefined,
      };

    case "CANCEL":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default AppReducer;
