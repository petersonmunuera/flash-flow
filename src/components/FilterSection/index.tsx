import { FilterBar } from '../FilterBar'

import style from './style.module.css'

type FilterSectionProps = {
  activeFilter: string
  onSelectFilter: (filter: string) => void
}

export function FilterSection({ activeFilter, onSelectFilter }: FilterSectionProps) {
  return (
    <section className={style.container}>
      <div className={style.info}>
        <span>PAINEL DE APRENDIZADO</span>
        <h1>Domine tecnologia com foco total.</h1>
      </div>
      <FilterBar activeFilter={activeFilter} onSelectFilter={onSelectFilter} />
    </section>
  )
}