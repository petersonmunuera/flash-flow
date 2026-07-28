import { Button } from '../Button'
import { Flashcard } from '../Flashcard'
import type { FlashcardType } from '../../types/flashcard'
import { AddNewFlashcard } from '../AddNewFlashcard'
import { useFilter } from '../../hooks/useFilter'
import { useFlashcards } from '../../hooks/useFlashcards'
import { v1 as uuid } from 'uuid'

import emptyImg from '../../assets/empty.svg'
import style from './style.module.css'

export function CardsSection() {
  const { activeFilter } = useFilter()
  const { flashcards, addFlashcard } = useFlashcards()

  const newFlashcard: FlashcardType = {
    id: uuid(),
    question: 'new flashcard',
    answer: 'answer new flashcard',
    category: 'React'
  }

  const hasSomeCard = Boolean(flashcards.length)
  const filteredCards = activeFilter === 'Tudo'
    ? flashcards
    : flashcards.filter(card => card.category === activeFilter)

  return hasSomeCard ? (
    <section className={style.gridContainer}>
      {filteredCards.map(card => (
        <Flashcard key={card.id} card={card} />
      ))}
      <AddNewFlashcard />
    </section>
  ) : (
    <section className={style.emptyContainer}>
      <img src={emptyImg} alt="vazio" />
      <p>Você ainda não possui flashcards.
        Que tal criar um para começar?</p>
      <Button onClick={() => addFlashcard(newFlashcard)}>Novo Flashcard</Button>
    </section>
  )
}