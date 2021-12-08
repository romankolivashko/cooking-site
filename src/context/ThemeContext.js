import { ceateContext } from 'react'

export const ThemeContext = ceateContext()

export function ThemeProvider({ children }) {

  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  )
}