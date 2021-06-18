var push = require('web-push');

let vapidKeys = {
  publicKey: 'BCtaF_7WQnr-r5R85Cx2-4SZ03MmaZE-sgUHUd_N63_5D9NgRddJvh-kCGlQ_31bYLsIA3LCkN4id9DLq3sT4eg',
  privateKey: 't7rw-Wuz6tukAwMPOXO4Im6LUMaJ9fptqVu6Bh8OqhY'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub={
  endpoint:
  'https://fcm.googleapis.com/fcm/send/db7GVSmny4I:APA91bFCJyMDyiLTRVUP064PRjPq3qZZyrsB-wsSksVhjXAZcEn8n824iZHUnDHgPNkzgBjQQEPf4OZerKnkObfJ0D2vxYcF4pDk8E0vgDbjENKaXUX9LeWGG9ipkrZ23qknxlAAKK-s',
  expirationTime: null,
  keys:{
    p256dh:'BPJQsg2qG-PIXNBIj4w0uCQAMIMA1S5QNq_P6S-VywZXbrnl_CYIIg_ROrTpljwxFHdUYfO7k0v_RgXsqPwdTWs',
  auth:'iGvZKNQmaduW3EQWOvDrrA'
  }
};

push.sendNotification(sub, 'test message');
