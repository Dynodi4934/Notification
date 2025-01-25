self.addEventListener('notificationclick', function(event) {
  // Check if the action clicked is 'open_wikipedia'
  if (event.action === 'open_wikipedia') {
    // Open Wikipedia in a new tab
    clients.openWindow('https://www.wikipedia.org/');
  }
  // Close the notification
  event.notification.close();
});
