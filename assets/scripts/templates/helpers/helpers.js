'use strict'

const displayMessage = (id, message, css) => {
  $('#' + id).html(message)
  $('#' + id).addClass(css)
  $('html, body').animate({ scrollTop: $('body').offset().top }, 'slow')
}

module.exports = {
  displayMessage
}
