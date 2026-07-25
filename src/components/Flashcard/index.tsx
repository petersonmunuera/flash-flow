import { useState } from 'react'
import type { FlashcardType } from '../../types/flashcard'
import editIcon from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import revealIcon from '../../assets/reveal.svg'
import style from './style.module.css'

type FlashcardProps = {
  card: FlashcardType
}

export function Flashcard({ card }: FlashcardProps) {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  return (
    <article key={card.question} className={style.card}>
      <header className={style.cardHeader}>
        <span>{card.category.toUpperCase()}</span>
        <div className={style.actions}>
          <button>
            <img src={editIcon} alt="editar" />
          </button>
          <button>
            <img src={deleteIcon} alt="excluir" />
          </button>
        </div>
      </header>
      <div className={`${style.cardBody} ${!showAnswer && style.hidden}`}>
        <p>{card.question}</p>
        {showAnswer && <p>{card.answer}</p>}
      </div>
      <footer className={style.cardFooter}>
        <button onClick={() => setShowAnswer(!showAnswer)}>
          <img src={revealIcon} alt="revelar" />
        </button>
      </footer>
    </article>
  )
}