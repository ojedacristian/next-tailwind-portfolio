'use client'
import { Chevron } from './icons'

export const ArrowDown: React.FC = () => {
  return (
    <button onClick={() => {
      const clients = document.getElementById('clients')
      clients?.scrollIntoView({ behavior: 'smooth' })
    }}>
        <Chevron />
    </button>
  )
}
