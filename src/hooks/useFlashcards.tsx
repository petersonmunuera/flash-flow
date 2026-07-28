import { useContext } from "react";
import { FlashcardContext } from "../contexts/flashcard-context";

export function useFlashcards() {
  const context = useContext(FlashcardContext)
  if (!context) throw new Error('context must be used inside a Provider')
  return context
}