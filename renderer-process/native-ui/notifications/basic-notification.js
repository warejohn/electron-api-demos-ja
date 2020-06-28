const notification = {
  title: '基本的な通知',
  body: '簡単なメッセージ'
}

const notificationButton = document.getElementById('basic-noti')

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification)

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
})
