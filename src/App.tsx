import { Header } from './components/Header'
import { FilterSection } from './components/FilterSection'
import { CardsSection } from './components/CardsSection'
import { FilterProvider } from './contexts/filter-context'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterProvider>
          <FilterSection />
          <CardsSection />
        </FilterProvider>
      </main>
    </>
  )
}

export default App