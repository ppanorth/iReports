const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
      publicKey: 'BLiGs98UJLSva9Bt_mc7c3ziCcw8A7bgWGrW4FQUaB_e4vRmi9TPsnROVZVP9FRfZ9Nk8dMModXIb4M_L4ATs7U',
      privateKey: 'HTfOcR1yoCadb0OD7UhVdVqap2RXX9-dZyxEFtdPMMo'
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