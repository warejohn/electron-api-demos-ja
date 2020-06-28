const {ipcMain, dialog} = require('electron')

ipcMain.on('open-error-dialog', (event) => {
  dialog.showErrorBox('エラーメッセージ', 'デモ用のエラーメッセージ')
})
