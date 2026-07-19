import { Button } from '../Button'

import style from './style.module.css'
import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img src={logoImg} alt='logo' />
        <span>Flash Flow</span>
      </div>

      <Button>Novo Flashcard</Button>
    </header>
  )
}