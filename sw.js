self.addEventListener('push', () => {
    self.registration.sendNotification('Please submit your report before June 30,2021 ', {});

});