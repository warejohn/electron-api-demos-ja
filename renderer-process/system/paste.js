const {clipboard} = require('electron')

const pasteBtn = document.getElementById('paste-to')

pasteBtn.addEventListener('click', () => {
  clipboard.writeText('デモです！')
  const message = `クリップボードコンテンツ: ${clipboard.readText()}`
  document.getElementById('paste-from').innerHTML = message
})
