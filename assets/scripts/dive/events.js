
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const onShowDives = function () {
  event.preventDefault()
  api.getDives()
    .then(ui.getDivesSuccess)
    .catch(ui.generalFailure)
}

const onShowCreateDive = function () {
  event.preventDefault()
  ui.showCreateDive()
}

const onShowUpdateDive = (event) => {
  event.preventDefault()
  api.getDive($(event.target).data('diveid'))
    .then(ui.showUpdateDive)
    .catch(ui.generalFailure)
}

const onCreateDive = function (event) {
  // prevent default action of page loading
  console.log('test')
  event.preventDefault()
  const data = getFormFields(this)
  console.log('event fired')

  // pass the data object into the "signUp" function that calls out to the api
  api.createDive(data)
    .then(ui.createDiveSuccess)
    .catch(ui.createDiveFailure)
}

const onUpdateDive = function () {
  // stuff
}

const addHandlers = () => {
  $('#create-dive').on('submit', onCreateDive)
  $('#update-dive').on('submit', onUpdateDive)
  $('#btn-show-dives').on('click', onShowDives)
  $('#btn-create-dive').on('click', onShowCreateDive)
  $('body').on('click', '.btn-update-dive', onShowUpdateDive)
}

const pageLoadEvents = () => {
  ui.updateAuthLayout()
}

module.exports = {
  addHandlers: addHandlers,
  pageLoadEvents: pageLoadEvents
}
