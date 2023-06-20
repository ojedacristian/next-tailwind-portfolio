export const customVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1 }
  }
}
export const customVariantItem = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 }
  })
}
