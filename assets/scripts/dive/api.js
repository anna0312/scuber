'use strict'
const config = require('../config')
// const store = require('../store')

const createDive = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/dives/',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

module.exports = {
  createDive: createDive
}
