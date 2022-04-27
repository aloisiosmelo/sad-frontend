import Introduction from "./components/pages/introdution";
import Dashboard from "./components/pages/dashboard";
import RankingTab from "./components/ranking-tab";
import NewRanking from "./components/new-ranking";
import RankingDetailTab from "./components/ranking-detail-tab";
import NewProject from "./components/new-project";
import RankingList from "./components/ranking-list";
import ProjectList from "./components/project-list";
import NotFound from "./components/not-found";

export default [
  {
    path: "/",
    element: <Introduction />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <RankingTab />,
        children: [
          {
            path: "",
            element: <RankingList />,
          },
          {
            path: "new-ranking",
            element: <NewRanking />,
          },
        ],
      },
      {
        path: "ranking-detail",
        element: <RankingDetailTab />,
        children: [
          {
            path: "ranking/:rankingId",
            element: <ProjectList />,
          },
          {
            path: "new-project/:rankingId",
            element: <NewProject />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
