import { FilterBar } from '../FilterBar'

import style from './style.module.css'

export function FilterSection() {
  return (
    <section className={style.container}>
      <div className={style.info}>
        <span>PAINEL DE APRENDIZADO</span>
        <h1>Domine tecnologia com foco total.</h1>
      </div>
      <FilterBar />
    </section>
  )
}