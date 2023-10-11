'use client'

import { useContext } from 'react'
import { ContextTheme } from '@/contexts/CTheme/contextTheme'

export default function Home() {
  const { theme } = useContext(ContextTheme)

  return (
    <main
      className={` w-full h-screen ${theme ? 'bg-white' : 'bg-black'}`}
    ></main>
  )
}
