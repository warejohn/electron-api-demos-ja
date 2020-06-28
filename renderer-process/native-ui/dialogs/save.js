const {ipcRenderer} = require('electron')

const saveBtn = document.getElementById('save-dialog')

saveBtn.addEventListener('click', (event) => {
  ipcRenderer.send('save-dialog')
})

ipcRenderer.on('saved-file', (event, path) => {
  if (!path) path = 'パスなし'
  document.getElementById('file-saved').innerHTML = `選択したパス: ${path}`
})
