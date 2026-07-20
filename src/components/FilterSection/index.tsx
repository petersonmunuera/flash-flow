import { useState } from 'react'
import { categories } from '../consts'
import style from './style.module.css'

const filterOptions = ['Tudo', ...categories]

export function FilterSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tudo')

  return (
    <section className={style.container}>
      <div className={style.info}>
        <span>PAINEL DE APRENDIZADO</span>
        <h1>Domine tecnologia com foco total.</h1>
      </div>
      <ul className={style.filters}>
        {filterOptions.map(filterOption => {
          const selectedClass = selectedFilter === filterOption ? style.selected : ''

          return (
            <li 
              className={selectedClass} 
              key={filterOption} 
              onClick={() => setSelectedFilter(filterOption)}
            >
              {filterOption}
            </li>
          )
        })}
      </ul>
    </section>
  )
}