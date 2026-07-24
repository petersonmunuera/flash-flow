import { Button } from '../Button'
import { Flashcard } from '../Flashcard'
import { cards } from './mock'

import emptyImg from '../../assets/empty.svg'
import style from './style.module.css'
import { useFilter } from '../../hooks/useFilter'

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