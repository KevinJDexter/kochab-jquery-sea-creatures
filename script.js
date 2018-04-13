$(document).ready(function () {
  console.log('jQuery has been loaded');
  onReady();
});

console.log('script.js has been loaded');

function onReady() {
  $('#incrementingButton').on('click', function() {
    let buttonVal = $('#buttonValue');
    let newVal = buttonVal.text()*1+1;
    $('#buttonValue').text(newVal);
    console.log(newVal);
  });
}