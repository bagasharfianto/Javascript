function getUsers(isOffline,callback) {
  setTimeout(() => {
    const users = ["Bambang", "Kuncoro", "Srimulim"];
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }
    callback(null,users);
   }, 3000);
}
//meng ekstraksi fungsi callback tersebut
function callbackUsers(error,users) {
  if (error) {
    console.log('process failed:', error.message);
    return;
  }
  
  users.forEach(user => {
    console.log(user);
  });
}


getUsers(true,callbackUsers);