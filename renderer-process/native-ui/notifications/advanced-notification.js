const path = require('path')

const notification = {
  title: '画像つき通知',
  body: '簡単なメッセージとカスタムイメージ',
  icon: path.join(__dirname, '../../../assets/img/programming.png')
}
const notificationButton = document.getElementById('advanced-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
