import { Header } from './components/Header'
import { FilterSection } from './components/FilterSection'
import { CardsSection } from './components/CardsSection'
import { FilterProvider } from './contexts/filter-context'
import { FlashcardProvider } from './contexts/flashcard-context'

import './global.css'

function App() {
  return (
    <FlashcardProvider>
      <Header />
      <main>
        <FilterProvider>
          <FilterSection />
          <CardsSection />
        </FilterProvider>
      </main>
    </FlashcardProvider>
  )
}

export default App