var push = require('web-push');

let vapidKeys = {
       publicKey: 'BAEAgCGkkZWzcNxlrEsKXcnfmAjdqPsBo29_88n1sjTqYVc8Nq1c4KuypkqlJjRLquyWgfHrZ76bvVa9Fp-5I5Y',
      privateKey: 'FmHDAB2XeOdrbkGImUOOmX-sVPuKdvFjzDrO_VnJqpY'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub={
  endpoint:
  'https://fcm.googleapis.com/fcm/send/dJU59MF0GnQ:APA91bEQyp2wXlxocv_XbdjnkDygCKm1h143SIxpSe91qguaZnLd6bJ8-bfLnD_Ihx8g2I9iSlDhHO628l53OcWzGaqO48DLehoiEGXt9sjlyF-d-kePEuBEdVLCk4a8o6Laf9-oyXvc',
  expirationTime:null,
  keys:{
    p256dh:'BBnT2H3qFuFQnise95qGTrJPoC8XZ1fRZX_G20wudR72ejKlArIJgc3OlWFTy8raUzrj-cW-a4Nn4WQFmY-peYM',
  auth:'b84P1XQKI-u9kUEmLsZ36Q'
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
