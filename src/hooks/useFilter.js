import { useContext } from "react";
import filterContext from "../contexts/FilterContext";

export default function useFilter() {
  return useContext(filterContext);
}