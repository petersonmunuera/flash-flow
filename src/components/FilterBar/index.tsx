import { useFilter } from '../../hooks/useFilter'
import { categories } from '../consts'

import style from './style.module.css'

const filters = ['Tudo', ...categories]

export function FilterBar() {
  const { activeFilter, setActiveFilter } = useFilter()

  return (
    <ul className={style.filters}>
      {filters.map(filter => {
        const selectedClass = activeFilter === filter ? style.selected : ''

        return (
          <li
            className={selectedClass}
            key={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </li>
        )
      })}
    </ul>
  )
}