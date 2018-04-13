$(document).ready(function () {
  console.log('jQuery has been loaded');
  onReady();
});

console.log('script.js has been loaded');

let count = 0;

function onReady() {
  // $('body').append('<button id="incrementingButton">Increment!!!</button>');
  // $('body').append('<span id="buttonValue">' + count + '</span>');

  $('#incrementingButton').on('click', clickHandler);
  $('#createCreatureButton').on('click', addSeaCreature);
}

function clickHandler() {
  console.log('counter button was clicked');
  count ++;
  console.log(count);
  updateDomCount();
}

function updateDomCount() {
  $('#buttonValue').text(count);
}

function getName () {
  return $('#seaCreatureName').val();
}

function getSize () {
  return $('#seaCreatureSize').val();
}

function getType () {
  return $('#seaCreatureType').val();
}

function getSpeed () {
  return $('#seaCreatureSpeed').val();
}

function clearInputBoxes() {
  $('#seaCreatureName').val('');
  $('#seaCreatureSize').val('');
  $('#seaCreatureType').val('');
  $('#seaCreatureSpeed').val('');
}

function addSeaCreature () {
  let name = '<td>' + getName() + '</td>';
  let size = '<td>' + getSize() + '</td>';
  let type = '<td>' + getType() + '</td>';
  let speed = '<td>' + getSpeed() + '</td>';
  let newRow = '<tr>' + name + size + type + speed + '</tr>'
  $('#seaCreatureTable').prepend(newRow);
  clearInputBoxes();
}