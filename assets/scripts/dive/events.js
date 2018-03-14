
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
  event.preventDefault()
  const data = getFormFields(this)
  api.createDive(data)
    .then(ui.createDiveSuccess, onShowDives())
    .catch(ui.createDiveFailure)
}

const onUpdateDive = function (event) {
  event.preventDefault()
  const data = getFormFields(this) // event.target is same as "this" used above
  api.updateDive(data)
    .then(ui.updateDiveSuccess)
    .catch(ui.generalFailure)
}

const onDeleteDive = function (event) {
  event.preventDefault()
  api.deleteDive($(event.target).data('diveid'))
    .then(ui.deleteDiveSuccess)
    .catch(ui.generalFailure)
  onShowDives()
}

const addHandlers = () => {
  $('body').on('submit', '#create-dive', onCreateDive)
  $('body').on('submit', '#update-dive', onUpdateDive)
  $('#btn-show-dives').on('click', onShowDives)
  $('#btn-create-dive').on('click', onShowCreateDive)
  $('body').on('click', '.btn-update-dive', onShowUpdateDive)
  $('body').on('click', '.btn-delete-dive', onDeleteDive)
}

const pageLoadEvents = () => {
  ui.updateAuthLayout()
}

module.exports = {
  addHandlers: addHandlers,
  pageLoadEvents: pageLoadEvents,
  onShowDives
}
