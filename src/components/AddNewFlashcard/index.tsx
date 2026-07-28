import plusIcon from '../../assets/plus.svg'
import { useFlashcards } from '../../hooks/useFlashcards'
import type { FlashcardType } from '../../types/flashcard'
import { v1 as uuid } from 'uuid'

import style from './style.module.css'

export function AddNewFlashcard() {
  const { addFlashcard } = useFlashcards()

  const newFlashcard: FlashcardType = {
    id: uuid(),
    question: 'new flashcard',
    answer: 'answer new flashcard',
    category: 'React'
  }

  return (
    <button className={style.container} onClick={() => addFlashcard(newFlashcard)}>
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