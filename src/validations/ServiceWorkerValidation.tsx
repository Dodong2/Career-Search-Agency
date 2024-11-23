import { useEffect } from 'react';
import { requestNotificationPermission } from "../utils/notificationHelper";

// eslint-disable-next-line react-refresh/only-export-components
export const initializeServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js', {
          updateViaCache: 'none' // Disable service worker cache for the worker itself
        });
        
        // Handle updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available, refresh the page
                if (window.confirm('New content is available! Would you like to refresh?')) {
                  window.location.reload();
                }
              }
            });
          }
        });

        // Check for updates every 60 minutes
        setInterval(() => {
          registration.update();
        }, 60 * 60 * 1000);

        // Request notification permission
        const permissionGranted = await requestNotificationPermission();
        console.log('Notification permission granted:', permissionGranted);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    });

    // Handle communication between the page and the Service Worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        // Handle cache updates if needed
        console.log('Cache updated:', event.data);
      }
    });
  }
};

const ServiceWorkerValidation = () => {
  useEffect(() => {
    initializeServiceWorker();
  }, []);

  return null;
};

export default ServiceWorkerValidation;