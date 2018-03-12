'use strict'
// const store = require('../store')
const helpers = require('../templates/helpers/helpers.js')
const showDivesTemplate = require('../templates/show-dives.handlebars')
const createDiveFormTemplate = require('../templates/create-dive-form.handlebars')
const updateDiveFormTemplate = require('../templates/update-dive-form.handlebars')

const clearFields = function () {

}

const getDivesSuccess = (data) => {
  console.log(data)
  const showDivesHtml = showDivesTemplate({ dives: data.dives })
  $('#primary-content').html(showDivesHtml)
}

const showCreateDive = (data) => {
  const showCreateDiveFormHtml = createDiveFormTemplate()
  $('#primary-content').html(showCreateDiveFormHtml)
}

const showUpdateDive = (data) => {
  const showUpdateDiveFormHtml = updateDiveFormTemplate({ dive: data.dive })
  $('#primary-content').html(showUpdateDiveFormHtml)
}

const updateDiveSuccess = function (data) {
  helpers.displayMessage('title', 'Dive updated')
  helpers.displayMessage('subtitle', 'Dive updated successfully!')
  console.log()
}

const deleteDiveSuccess = function (data) {
  helpers.displayMessage('title', 'Dive deleted')
  helpers.displayMessage('subtitle', 'Dive deleted!')
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

const generalFailure = function (error) {
  helpers.displayMessage('title', 'Something went wrong')
  helpers.displayMessage('subtitle', 'Please contact the authorities')
  console.error(error)
  console.log('error is', error)
}

module.exports = {
  getDivesSuccess,
  showCreateDive,
  showUpdateDive,
  updateDiveSuccess,
  deleteDiveSuccess,
  createDiveSuccess,
  createDiveFailure,
  generalFailure
}
