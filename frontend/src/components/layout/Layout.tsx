import { Link, NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} to="/"><span>HR</span> HR-портал</Link>
          <nav aria-label="Основная навигация">
            <NavLink to="/" end>Главная</NavLink>
            <NavLink to="/development-plans">Планы развития</NavLink>
            <NavLink to="/competencies">Компетенции</NavLink>
            <NavLink to="/departments">Отделы</NavLink>
          </nav>
        </div>
      </header>
      <main className={styles.main}><Outlet /></main>
      <footer className={styles.footer}>HR-портал · Развитие персонала</footer>
    </div>
  )
}
