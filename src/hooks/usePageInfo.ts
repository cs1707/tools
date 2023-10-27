import { routeDict } from "@/constant/page-info";
import { useLocation } from "react-router-dom";

export const usePageInfo = () => {
  const { pathname } = useLocation();

  return routeDict[pathname] || routeDict["/"];
};
