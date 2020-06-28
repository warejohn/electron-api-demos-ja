const {ipcMain, dialog} = require('electron')

ipcMain.on('open-information-dialog', (event) => {
  const options = {
    type: 'info',
    title: 'メッセージ',
    message: "これはメッセージダイアログです。いい感じじゃないですか？",
    buttons: ['はい', 'いいえ']
  }
  dialog.showMessageBox(options, (index) => {
    event.sender.send('information-dialog-selection', index)
  })
})
