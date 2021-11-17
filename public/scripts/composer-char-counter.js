$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let charCount = $(this).val().length
    let counterValue = 140
    let currentValue = counterValue - charCount
    currentValue > 0 ? $(".counter").text(currentValue) : $(".counter").text(currentValue).css('color', 'red')
   
})
})