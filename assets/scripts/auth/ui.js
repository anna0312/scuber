'use strict'
const store = require('../store')
const helpers = require('../templates/helpers/helpers.js')

const clearFields = function () {
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#change-password')[0].reset()
}

const showSignUp = function () {
  $('#signUpFormDiv').show()
  $('#signInFormDiv').hide()
}

const showSignIn = function () {
  $('#signInFormDiv').show()
  $('#signUpFormDiv').hide()
}


const signUpSuccess = function (data) {
  helpers.displayMessage('message', 'Welcome! Now log in... ')
  updateAuthLayout()
  $('#collapseTwo').removeClass('in')
  clearFields()
}

const signUpFailure = function (error) {
//  $('#authResponse').text('Error on signing up')
//  $('#authResponse').css('background-color', 'red')
  helpers.displayMessage('message', 'Oh no! Something went wrong!')
  console.error(error)
  clearFields()
}

const signUpFailPwdMatch = function () {
  helpers.displayMessage('message', 'Your password and password confirmation don\'t match')
  clearFields()
}

const signInSuccess = function (data) {
  helpers.displayMessage('message', 'Welcome back. Lets go diving!')
  store.user = data.user
  updateAuthLayout()
  clearFields()
//  $('#sign-up').reset()
}

const signInFailure = function (error) {
  helpers.displayMessage('message', 'Login unsuccessful. You sure you got that password right?')
  console.error(error)
  clearFields()
}

const changePasswordSuccess = function () {
  helpers.displayMessage('message', 'Done! Your secret is safe with us.')
  $('#change-password-form').removeClass('in')
  clearFields()
}

const changePasswordFailure = function (error) {
  helpers.displayMessage('message', 'There was an issue changing your password')
  console.error(error)
  clearFields()
}

const signOutSuccess = function (data) {
  helpers.displayMessage('message', 'Hope you\'re off to go diving!')
  clearFields()
  store.user = data
  // console.log(store)
  updateAuthLayout()
  $('#collapseOne').removeClass('in')
}

const signOutFailure = function (error) {
  helpers.displayMessage('title', 'Yikes! Problems.')
  console.error(error)
  clearFields()
}

const updateAuthLayout = function () {
  // console.log(store.user)
  // if a token exists, means a user is logged in. present accordingly
  if (store.user !== undefined) { // if the user is logged in...
    $('#display-not-auth').addClass('hidden')
    $('#display-not-auth').removeClass('show')
    $('#display-authed').addClass('show')
    $('#display-authed').removeClass('hidden')
    $('#viewable-logged-in').addClass('show')
    $('#viewable-logged-in').removeClass('hidden')

    // console.log('logged in')
  } else {
    $('#display-not-auth').addClass('show')
    $('#display-not-auth').removeClass('hidden')
    $('#display-authed').addClass('hidden')
    $('#display-authed').removeClass('show')
    $('#viewable-logged-in').addClass('hidden')
    $('#viewable-logged-in').removeClass('show')

    // console.log('not logged in')
  }
  clearFields()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  updateAuthLayout,
  signUpFailPwdMatch,
  clearFields,
  showSignIn,
  showSignUp
}
