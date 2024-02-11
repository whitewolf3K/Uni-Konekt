// Mock data for notifications
const notifications = [
    { message: "University exam scheduled for tomorrow", date: new Date() },
    { message: "College event 'Cultural Fest' starts today", date: new Date() },
    { message: "Reminder: Submission of project report due yesterday", date: new Date() - (24 * 60 * 60 * 1000) },
    { message: "Seminar on 'Artificial Intelligence' conducted yesterday", date: new Date() - (24 * 60 * 60 * 1000) }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const todayNotificationsList = document.getElementById('todayNotifications');
    const yesterdayNotificationsList = document.getElementById('yesterdayNotifications');
  
    // Filter notifications for today and yesterday
    const today = new Date().toDateString();
    const yesterday = new Date(new Date() - (24 * 60 * 60 * 1000)).toDateString();
  
    notifications.forEach(notification => {
      const notificationDate = new Date(notification.date).toDateString();
      const listItem = document.createElement('li');
      listItem.textContent = notification.message;
  
      if (notificationDate === today) {
        listItem.classList.add('today');
        todayNotificationsList.appendChild(listItem);
      } else if (notificationDate === yesterday) {
        listItem.classList.add('yesterday');
        yesterdayNotificationsList.appendChild(listItem);
      }
    });
  });
  