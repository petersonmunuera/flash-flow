import { useState } from 'react'

import { Header } from './components/Header'
import { FilterSection } from './components/FilterSection'
import { CardsSection } from './components/CardsSection'

import './global.css'

function App() {
  const [activeFilter, setActiveFilter] = useState<string>('Tudo')

  return (
    <>
      <Header />
      <main>
        <FilterSection activeFilter={activeFilter} onSelectFilter={setActiveFilter} />
        <CardsSection activeFilter={activeFilter} />
      </main>
    </>
  )
}

export default App