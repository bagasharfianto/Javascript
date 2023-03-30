function getUsers(isOffline) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = ["Bambang", "Sukimin", "Budi"];

      if (isOffline) {
        reject(new Error('cannot retrieve users due offline'));
        return;
      }
      resolve(users);
    }, 3000);
  });
}

getUsers(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));