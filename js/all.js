document.querySelector('#top').addEventListener('click',item => {
  item.preventDefault()

  // Safari
  document.body.scrollTop = 0
  // Others
  document.documentElement.scrollTop = 0
})


window.addEventListener('scroll', () => {
  let show = false
  if (window.scrollY === 0) {
    document.querySelector('#top').classList.remove('is-show')
    show = false
  } else{
    if (!show) document.querySelector('#top').classList.add('is-show')
  }
})
