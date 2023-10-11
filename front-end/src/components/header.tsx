'use client'

import Image from "next/image"
import { useState, useContext } from "react"
import { ContextTheme } from "@/contexts/contextTheme"
import Link from "next/link"

export function Header () {

  const { theme, setTheme } = useContext(ContextTheme)

  return (
    <header className={ `px-3 py-4 flex items-center justify-between text-white ${theme ? 'bg-light-blue-900' : 'bg-dark-translucent'}` }>
      <div className="flex justify-center items-center">
        <Image className="mr-2" alt="Logo TableNews" src='/table-24px.png' width={24} height={24}></Image>
        <h1 className='text-base'>TableNews</h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <input placeholder="Pesquisar" type="text" className={` px-4  outline-none rounded-lg w-72 h-8 ${ theme ? 'text-light-blue-900' : 'bg-dark-translucent' } `} />
        <Image onClick={() => setTheme(!theme)} className="mr-2 hover:cursor-pointer" alt="Logo TableNews" src={`${theme ? '/moon-icon-theme.png' : '/sun-icon-theme.png'}`} width={18} height={18}></Image>
        <Link href='/login'>Login</Link>
        <Link href='/cadastrar'>Cadastrar</Link>
      </div>
    </header>
  )
}