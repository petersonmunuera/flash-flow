import { createContext, useState, type ReactNode } from "react"

type FilterContextType = {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

const FilterContext = createContext<FilterContextType | null>(null)

type FilterProviderProps = {
  children: ReactNode
}

function FilterProvider({ children }: FilterProviderProps) {
  const [activeFilter, setActiveFilter] = useState<string>("Tudo")

  return (
    <FilterContext.Provider value={{
      activeFilter,
      setActiveFilter
    }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContext, FilterProvider }