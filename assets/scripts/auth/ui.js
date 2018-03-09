'use strict'
const store = require('../store')
const helpers = require('../templates/helpers/helpers.js')

const clearFields = function () {
  $('#sign-in')[0].reset()
  $('#sign-up')[0].reset()
  $('#change-password')[0].reset()
}

const signUpSuccess = function (data) {
  helpers.displayMessage('title', 'You\'re one of us now')
  helpers.displayMessage('subtitle', 'Now, drink the Kool-Aid and log in to make it official')
  updateAuthLayout()
  $('#collapseTwo').removeClass('in')
  clearFields()
}

const signUpFailure = function (error) {
//  $('#authResponse').text('Error on signing up')
//  $('#authResponse').css('background-color', 'red')
  helpers.displayMessage('title', 'Yikes! Something went horribly awry!')
  helpers.displayMessage('subtitle', 'Could be you already signed up? Or the API hates you.')
  console.error(error)
  clearFields()
}

const signUpFailPwdMatch = function () {
  helpers.displayMessage('title', 'Ummm... spell much?')
  helpers.displayMessage('subtitle', 'Your password and password confirmation don\'t match')
  clearFields()
}

const signInSuccess = function (data) {
  helpers.displayMessage('title', 'Welcome back', 'big-red')
  helpers.displayMessage('subtitle', 'Lets go diving!', 'big-green')
  store.user = data.user
  updateAuthLayout()
  clearFields()
//  $('#sign-up').reset()
}

const signInFailure = function (error) {
  helpers.displayMessage('title', 'Login was not successful.')
  helpers.displayMessage('subtitle', 'You sure you got that password right?', 'big-green')
  console.error(error)
  clearFields()
}

const changePasswordSuccess = function () {
  helpers.displayMessage('title', 'Done!')
  helpers.displayMessage('subtitle', 'Your secret is safe with us', 'big-green')
  $('#change-password-form').removeClass('in')
  clearFields()
}

const changePasswordFailure = function (error) {
  helpers.displayMessage('title', 'There was an issue changing your password')
  helpers.displayMessage('subtitle', 'Please check your spelling', 'big-green')
  console.error(error)
  clearFields()
}

const signOutSuccess = function (data) {
  helpers.displayMessage('title', 'Happy diving!')
  helpers.displayMessage('subtitle', 'Come back soon...', 'big-green')
  clearFields()
  store.user = data
  // console.log(store)
  updateAuthLayout()
  $('#collapseOne').removeClass('in')
}

const signOutFailure = function (error) {
  helpers.displayMessage('title', 'Yikes! Problems.')
  helpers.displayMessage('subtitle', 'Don\t get your panties in a twist', 'big-green')
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
    // console.log('logged in')
  } else {
    $('#display-not-auth').addClass('show')
    $('#display-not-auth').removeClass('hidden')
    $('#display-authed').addClass('hidden')
    $('#display-authed').removeClass('show')
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
  clearFields
}
