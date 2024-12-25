document.querySelectorAll('.skill-icon').forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.1)'
  })
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)'
  })
})

document.querySelectorAll('a').forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#94e2d5'
  })
  link.addEventListener('mouseout', () => {
    link.style.color = '#fab387'
  })
})
