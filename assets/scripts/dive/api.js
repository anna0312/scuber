'use strict'
const config = require('../config')
// const store = require('../store')

const getDives = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/dives/'
  })
}

const getDive = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/dives/' + id
  })
}

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
  createDive: createDive,
  getDives,
  getDive
}
