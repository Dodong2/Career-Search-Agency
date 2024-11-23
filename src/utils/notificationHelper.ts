export const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return false;
    }
  
    try {
      const permission = await Notification.requestPermission();
      console.log('Notification permission:', permission);
      return permission === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  };
  
  export const showNotification = async (title: string, body: string) => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications');
      return;
    }
  
    if (Notification.permission !== 'granted') {
      console.log('Notification permission not granted');
      const permission = await requestNotificationPermission();
      if (!permission) return;
    }
  
    try {
      // First try using the Notifications API directly
      if ('Notification' in window) {
        new Notification(title, {
          body,
          icon: './src/assets/img/dong.png',
        });
      } else {
        // Fallback to service worker notification
        const registration = await navigator.serviceWorker.ready;
        await registration.showNotification(title, {
          body,
          icon: './src/assets/img/dong.png',
          badge: './src/assets/img/dong.png',
          tag: 'new-job-notification',
        });
      }
    } catch (error) {
      console.error('Error showing notification:', error);
    }
  };