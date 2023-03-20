function getUser(isOffline,callback) {
  setTimeout(() => {
    const users = ['John', 'Jack'];

    if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
    callback(null,users);
  }, 5000);
}


function userCallback(users) {
  console.log(users);
}

getUser(userCallback);