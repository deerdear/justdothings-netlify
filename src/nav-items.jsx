import { HomeIcon } from "lucide-react";
import { lazy } from "react";
const Index = lazy(() => import("./pages/Index.jsx"));
const EssayOne = lazy(() => import("./pages/essays/EssayOne.jsx"));
const EssayTwo = lazy(() => import("./pages/essays/EssayTwo.jsx"));
const EssayThree = lazy(() => import("./pages/essays/EssayThree.jsx"));

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Address to Machine Offensive 2.0",
    to: "/essays/one",
    page: <EssayOne />,
  },
  // {
  //   title: "Essay Two",
  //   to: "/essays/two",
  //   page: <EssayTwo />,
  // },
  // {
  //   title: "Essay Three",
  //   to: "/essays/three",
  //   page: <EssayThree />,
  // },
];
