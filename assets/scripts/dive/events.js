
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

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
}

const pageLoadEvents = () => {
  ui.updateAuthLayout()
}

module.exports = {
  addHandlers: addHandlers,
  pageLoadEvents: pageLoadEvents
}
