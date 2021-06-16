const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey: 'BBKEFJBTih20pCkFKXw1Gd51joIpavUXG1HrEES5IDvCa6mElW13QzQDuK4cC_aWP0zXjcZE5Wdhxyut1nCCzT0',
  privateKey: 'O5L6Bc7Dqa8Cd6LnquI3ezzWLlrlZ9rg3vEQyjhYfMs'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');