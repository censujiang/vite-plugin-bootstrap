(() => {
  'use strict'
  if (!import.meta.env.SSR) {
    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  }
})()
