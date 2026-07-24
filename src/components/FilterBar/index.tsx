import { categories } from '../consts'

import style from './style.module.css'

const filters = ['Tudo', ...categories]

type FilterBarProps = {
  activeFilter: string
  onSelectFilter: (filter: string) => void
}

export function FilterBar({ activeFilter, onSelectFilter }: FilterBarProps) {
  return (
    <ul className={style.filters}>
      {filters.map(filter => {
        const selectedClass = activeFilter === filter ? style.selected : ''

        return (
          <li
            className={selectedClass}
            key={filter}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </li>
        )
      })}
    </ul>
  )
}