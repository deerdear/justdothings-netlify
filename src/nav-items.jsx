import { HomeIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import EssayOne from "./pages/essays/EssayOne.jsx";
import EssayTwo from "./pages/essays/EssayTwo.jsx";
import EssayThree from "./pages/essays/EssayThree.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Essay One",
    to: "/essays/one",
    page: <EssayOne />,
  },
  {
    title: "Essay Two",
    to: "/essays/two",
    page: <EssayTwo />,
  },
  {
    title: "Essay Three",
    to: "/essays/three",
    page: <EssayThree />,
  },
];