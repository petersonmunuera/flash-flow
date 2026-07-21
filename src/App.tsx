import { Header } from './components/Header'
import { FilterSection } from './components/FilterSection'
import { CardsGrid } from './components/CardsGrid'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <CardsGrid />
      </main>
    </>
  )
}

export default App