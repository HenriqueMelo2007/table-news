'use client'

import { createContext, useState } from 'react';

export const ContextTheme = createContext({})

export function ProviderContextTheme ( { children } ) {

  const [theme, setTheme] = useState(true)

  const valueContextTheme = {
    theme,
    setTheme,
  }


  return (
    <ContextTheme.Provider value={valueContextTheme}>
      {children}
    </ContextTheme.Provider>
  )
}