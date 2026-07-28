import { createContext, useState, type ReactNode } from "react";
import type { FlashcardType } from "../types/flashcard";

type FlashcardContextType = {
  flashcards: FlashcardType[]
  addFlashcard: (flashcard: FlashcardType) => void
  removeFlashcard: (id: string) => void
}

const FlashcardContext = createContext<FlashcardContextType | null>(null)

type FlashcardProviderProps = {
  children: ReactNode
}

function FlashcardProvider({ children }: FlashcardProviderProps) {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(() => {
    const storaged = localStorage.getItem('@flashcards')
    return storaged ? JSON.parse(storaged) : []
  })

  function addFlashcard(flashcard: FlashcardType) {
    setFlashcards([...flashcards, flashcard])
    localStorage.setItem('@flashcards', JSON.stringify([...flashcards, flashcard]))
  }

  function removeFlashcard(id: string) {
    const updatedFlashcards = flashcards.filter(flashcard => flashcard.id != id)

    setFlashcards(updatedFlashcards)
    localStorage.setItem('@flashcards', JSON.stringify(updatedFlashcards))
  }

  return (
    <FlashcardContext.Provider value={{
      flashcards,
      addFlashcard,
      removeFlashcard
    }}>
      {children}
    </FlashcardContext.Provider>
  )
}

export { FlashcardContext, FlashcardProvider }