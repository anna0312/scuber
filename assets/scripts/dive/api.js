'use strict'
const config = require('../config')
const store = require('../store')

const getDives = function (data) {
  // console.log('token is', store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/dives',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

const getDive = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/dives/' + id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

const createDive = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/dives/',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateDive = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/dives/' + data.dive.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteDive = function (id) {
  // console.log('id is', id)
  return $.ajax({
    url: config.apiOrigin + '/dives/' + id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDive: createDive,
  getDives,
  getDive,
  updateDive,
  deleteDive
}
