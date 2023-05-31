import MainPage from "../../pages/MainPage/MainPage";
import { ReactElement } from "react";
import UserHomepage from "../../pages/UserHomepage/UserHomepage";
import About from "../../pages/About/About";

export type TRoute = {
  element: ReactElement;
  path: string;
};

export const publicRoute: TRoute[] = [
  {
    element: <MainPage />,
    path: "/",
  },
  {
    element: <UserHomepage />,
    path: "/user-homepage",
  },
  {
    element: <About />,
    path: "/about",
  },
];
