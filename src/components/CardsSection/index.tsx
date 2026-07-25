import { Button } from '../Button'
import { Flashcard } from '../Flashcard'
import { AddNewFlashcard } from '../AddNewFlashcard'
import { useFilter } from '../../hooks/useFilter'

import { cards } from './mock'

import emptyImg from '../../assets/empty.svg'
import style from './style.module.css'

export function CardsSection() {
  const { activeFilter } = useFilter()
  const hasSomeCard = Boolean(cards.length)
  const filteredCards = activeFilter === 'Tudo'
    ? cards
    : cards.filter(card => card.category === activeFilter)

  return hasSomeCard ? (
    <section className={style.gridContainer}>
      {filteredCards.map(card => (
        <Flashcard key={card.question} card={card} />
      ))}
      <AddNewFlashcard />
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