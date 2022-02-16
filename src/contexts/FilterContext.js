import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {


  const [filter, setFilter] = useState({
    first: {
      isComplete: false,
      wordInfo: {}
    },
    second: {
      isComplete: false,
      wordInfo: {}
    },
    third: {
      isComplete: false,
      wordInfo: {}
    },
    forth: {
      isComplete: false,
      wordInfo: {}
    },
    fifth: {
      isComplete: false,
      wordInfo: {}
    }
  });

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterContext;