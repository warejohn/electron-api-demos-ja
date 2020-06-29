const {clipboard} = require('electron')

const copyBtn = document.getElementById('copy-to')
const copyInput = document.getElementById('copy-to-input')

copyBtn.addEventListener('click', () => {
  if (copyInput.value !== '') copyInput.value = ''
  copyInput.placeholder = 'コピーされました！　ここに貼り付けてみましょう。'
  clipboard.writeText('Electron デモ！')
})
