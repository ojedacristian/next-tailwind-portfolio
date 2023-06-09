'use client'

import { type NavButtonProps } from '@/interfaces/interfaces'

const navegar = (id: string): void => {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export const NavButton: React.FC<NavButtonProps> = ({ title, id, className, fn }) => {
  return (
      <button className={ className}
      onClick={ () => {
        if (fn !== undefined) fn()
        navegar(id)
      }}
      >
        {title}
      </button>
  )
}
