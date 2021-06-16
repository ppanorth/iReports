var push = require('web-push');

let vapidKeys = {
       publicKey: 'BAEAgCGkkZWzcNxlrEsKXcnfmAjdqPsBo29_88n1sjTqYVc8Nq1c4KuypkqlJjRLquyWgfHrZ76bvVa9Fp-5I5Y',
      privateKey: 'FmHDAB2XeOdrbkGImUOOmX-sVPuKdvFjzDrO_VnJqpY'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub={
  endpoint:
  'https://fcm.googleapis.com/fcm/send/db7GVSmny4I:APA91bFCJyMDyiLTRVUP064PRjPq3qZZyrsB-wsSksVhjXAZcEn8n824iZHUnDHgPNkzgBjQQEPf4OZerKnkObfJ0D2vxYcF4pDk8E0vgDbjENKaXUX9LeWGG9ipkrZ23qknxlAAKK-s',
  expirationTime:null,
  keys:{
    p256dh:'BPJQsg2qG-PIXNBIj4w0uCQAMIMA1S5QNq_P6S-VywZXbrnl_CYIIg_ROrTpljwxFHdUYfO7k0v_RgXsqPwdTWs',
  auth:'iGvZKNQmaduW3EQWOvDrrA'
  }
};

push.sendNotification(sub, 'test message');






// const webpush = require('web-push');

// // VAPID keys should only be generated only once.
// const vapidKeys = {
//   publicKey: 'BBKEFJBTih20pCkFKXw1Gd51joIpavUXG1HrEES5IDvCa6mElW13QzQDuK4cC_aWP0zXjcZE5Wdhxyut1nCCzT0',
//   privateKey: 'O5L6Bc7Dqa8Cd6LnquI3ezzWLlrlZ9rg3vEQyjhYfMs'
// };

// webpush.setVapidDetails(
//   'mailto:example@yourdomain.org',
//   vapidKeys.publicKey,
//   vapidKeys.privateKey
// );

// // This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

// webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
