const {screen} = require('electron')

const screenInfoBtn = document.getElementById('screen-info')
const size = screen.getPrimaryDisplay().size

screenInfoBtn.addEventListener('click', () => {
  const message = `ディスプレイの解像度: ${size.width}px x ${size.height}px`
  document.getElementById('got-screen-info').innerHTML = message
})
