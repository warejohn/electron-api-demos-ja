const {ipcRenderer} = require('electron')

const informationBtn = document.getElementById('information-dialog')

informationBtn.addEventListener('click', (event) => {
  ipcRenderer.send('open-information-dialog')
})

ipcRenderer.on('information-dialog-selection', (event, index) => {
  let message = '選んだのは '
  if (index === 0) message += 'はい。'
  else message += 'いいえ。'
  document.getElementById('info-selection').innerHTML = message
})
