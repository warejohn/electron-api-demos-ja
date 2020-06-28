const os = require('os')
const homeDir = os.homedir()

const sysInfoBtn = document.getElementById('sys-info')

sysInfoBtn.addEventListener('click', () => {
  const message = `ホームディレクトリの場所: ${homeDir}`
  document.getElementById('got-sys-info').innerHTML = message
})
