import { useState } from 'react'
import { categories } from '../consts'

import style from './style.module.css'

const filterOptions = ['Tudo', ...categories]

export function FilterBar() {
  const [selectedFilter, setSelectedFilter] = useState<string>('Tudo')

  return (
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
  )
}