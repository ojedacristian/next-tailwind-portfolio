export interface Work {
  title: string
  image: string
  desc: string
  category: string
}

export interface NavButtonProps {
  title: string
  id: string
  className?: string
  fn?: () => void
}
