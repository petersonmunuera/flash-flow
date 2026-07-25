import plusIcon from '../../assets/plus.svg'

import style from './style.module.css'

export function AddNewFlashcard() {
  return (
    <button className={style.container}>
      <div className={style.plus}>
        <img src={plusIcon} alt="Adicionar" />
      </div>
      <div>
        <span>Criar novo card</span>
        <p>
          Adicione um novo desafio à sua biblioteca e
          mantenha o ritmo.
        </p>
      </div>
    </button>
  )
}