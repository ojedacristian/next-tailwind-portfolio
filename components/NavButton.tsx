'use client'

import { type NavButtonProps } from '@/interfaces/interfaces'

const navegar = (id: string): void => {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export const NavButton: React.FC<NavButtonProps> = ({ title, id }) => {
  return (
      <button className='uppercase text-neutral-1 hover:text-pink-700 border-b-pink-700 hover:border-b-2'
      onClick={ () => { navegar(id) }}
      >
        {title}
      </button>
  )
}
