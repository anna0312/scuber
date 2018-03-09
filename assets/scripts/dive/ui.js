'use strict'
// const store = require('../store')
const helpers = require('../templates/helpers/helpers.js')

const clearFields = function () {

}

const createDiveSuccess = function (data) {
  helpers.displayMessage('title', 'Dive saved')
  helpers.displayMessage('subtitle', 'Noice!')
  console.log()
}

const createDiveFailure = function (error) {
//  $('#authResponse').text('Error on signing up')
//  $('#authResponse').css('background-color', 'red')
  helpers.displayMessage('title', 'Yikes! Something went horribly awry!')
  helpers.displayMessage('subtitle', 'Could be you already signed up? Or the API hates you.')
  console.error(error)
  clearFields()
}

module.exports = {
  createDiveSuccess: createDiveSuccess,
  createDiveFailure: createDiveFailure
}
