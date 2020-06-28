const {ipcMain, dialog} = require('electron')

ipcMain.on('save-dialog', (event) => {
  const options = {
    title: '画像を保存',
    filters: [
      { name: 'Images', extensions: ['jpg', 'png', 'gif'] }
    ]
  }
  dialog.showSaveDialog(options, (filename) => {
    event.sender.send('saved-file', filename)
  })
})
