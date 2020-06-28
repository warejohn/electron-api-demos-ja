const {ipcRenderer} = require('electron')

// デモボタンがクリックされたときにメニューを表示するようにメインプロセスに伝えます。
const contextMenuBtn = document.getElementById('context-menu')

contextMenuBtn.addEventListener('click', () => {
  ipcRenderer.send('show-context-menu')
})
