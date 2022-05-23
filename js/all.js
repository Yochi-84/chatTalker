document.querySelector('#top').addEventListener('click',item => {
  item.preventDefault()

  // Safari
  document.body.scrollTop = 0
  // Others
  document.documentElement.scrollTop = 0
})

