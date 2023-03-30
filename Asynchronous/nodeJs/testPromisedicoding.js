const { promisify } = require('util');

function getProvinces(countryId, callback) {
  setTimeout(() => {
    if (countryId == 'id') {
      callback(null, [
        { id: 'id-jk', name: 'Jakarta' },
        { id: 'id-bt', name: 'Banten' },
        { id: 'id-jr', name: 'Jawa Barat' },
      ]);
      return;
    }

    callback(new Error('Country not found'), null);
  }, 1000);
}

const getProvincespromise = promisify(getProvinces);
getProvincespromise(id)
  .then(countryId => console.log(countryId)) 
  .catch(err => console.log(err.message));


getProvincespromise(id)
  .then(countryId => console.log(countryId)) 
  .catch(err => console.log(err.message));