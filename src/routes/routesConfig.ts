import CreatePage from "../pages/CreatePage";
import MainPage from "../pages/MainPage";

export type TRoutesConfig = {
  [key: string]: {
    title: string | null;
    path: string;
    component: () => JSX.Element;
  };
};

export const routesConfig: TRoutesConfig = {
  main: {
    title: "",
    path: "/",
    component: MainPage,
  },
  create: {
    title: "",
    path: "/create",
    component: CreatePage,
  },
};
