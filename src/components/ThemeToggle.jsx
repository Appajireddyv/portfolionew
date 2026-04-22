import { useEffect, useState } from 'react'

function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved === 'dark' || saved === 'light' ? saved : getSystemTheme()
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    applyTheme(next)
  }

  return (
    <button type="button" className="themeToggle" onClick={toggle} aria-label="Toggle color theme">
      <span className="themeToggle-dot" aria-hidden="true" />
      <span className="themeToggle-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  )
}

