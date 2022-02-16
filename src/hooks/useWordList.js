import { useContext } from "react";
import WordListContext from "../contexts/WordListContext";

export default function useWordList() {
  return useContext(WordListContext);
}