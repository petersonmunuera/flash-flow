import { Button } from '../Button'

import type { FlashCardType } from '../../types/flashCard'

import emptyImg from '../../assets/empty.svg'
import editIcon from '../../assets/edit.svg'
import deleteIcon from '../../assets/delete.svg'
import revealIcon from '../../assets/reveal.svg'

import style from './style.module.css'

const cards: FlashCardType[] = [
  {
    category: "React",
    question: "pergunta 1",
    answer: "resposta 1"
  },
  {
    category: "JavaScript",
    question: "pergunta 2",
    answer: "resposta 1"
  },
  {
    category: "Node.js",
    question: "pergunta 3",
    answer: "resposta 1"
  },
  {
    category: "Tailwind CSS",
    question: "pergunta 4",
    answer: "resposta 1"
  },
  {
    category: "React",
    question: "pergunta 5",
    answer: "resposta 1"
  },
]

export function CardsGrid() {
  const hasSomeCard = Boolean(cards.length)

  return hasSomeCard ? (
    <section className={style.gridContainer}>
      {cards.map(card => (
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
          <div>
            <p>{card.question}</p>
            <p>{card.answer}</p>
          </div>
          <button>
            <img src={revealIcon} alt="revelar" />
          </button>
        </article>
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