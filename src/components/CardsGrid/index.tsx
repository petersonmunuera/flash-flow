import { Button } from '../Button'

import emptyImg from '../../assets/empty.svg'
import style from './style.module.css'

export function GridCards() {
  return (
    <div className={style.container}>
      <img src={emptyImg} alt="vazio" />
      <p>Você ainda não possui flashcards. 
      Que tal criar um para começar?</p>
      <Button>Novo Flashcard</Button>
    </div>
  )
}