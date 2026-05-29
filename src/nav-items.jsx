import { HomeIcon } from "lucide-react";
import { lazy } from "react";
const Index = lazy(() => import("./pages/Index.jsx"));
const EssayOne = lazy(() => import("./pages/essays/EssayOne.jsx"));
const EssayTwo = lazy(() => import("./pages/essays/EssayTwo.jsx"));
const ObservationsFromEarth = lazy(() => import("./pages/essays/ObservationsFromEarth.jsx"));
const RadicalAero = lazy(() => import("./pages/essays/RadicalAero.jsx"));
const WhenLeoFails = lazy(() => import("./pages/essays/WhenLeoFails.jsx"));

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
  {
    title: "European Fellowship",
    to: "/essays/two",
    page: <EssayTwo />,
  },
  {
    title: "Observations from Earth",
    to: "/essays/observations-from-earth",
    page: <ObservationsFromEarth />,
  },
  {
    title: "Radical Aero",
    to: "/essays/radical-aero",
    page: <RadicalAero />,
  },
  {
    title: "When LEO Fails",
    to: "/essays/when-leo-fails",
    page: <WhenLeoFails />,
  },
];
