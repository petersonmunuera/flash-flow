import { Header } from './components/Header'
import { FilterSection } from './components/FilterSection'
import { GridCards } from './components/CardsGrid'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <GridCards />
      </main>
    </>
  )
}

export default App