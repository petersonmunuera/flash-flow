import { Button } from '../Button'
import { cards } from './mock'

import emptyImg from '../../assets/empty.svg'

import style from './style.module.css'
import { Flashcard } from '../Flashcard'

export function CardsSection() {
  const hasSomeCard = Boolean(cards.length)

  return hasSomeCard ? (
    <section className={style.gridContainer}>
      {cards.map(card => (
        <Flashcard key={card.question} card={card} />
      ))}
    </section>
  ) : (
    <section className={style.emptyContainer}>
      <img src={emptyImg} alt="vazio" />
      <p>Você ainda não possui flashcards. 
      Que tal criar um para começar?</p>
      <Button>Novo Flashcard</Button>
    </section>
  )
}