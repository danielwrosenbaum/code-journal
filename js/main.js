/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('.form');
var inputValues = document.querySelectorAll('input');

function addUrl(event) {
  $photoUrl.src = event.target.value;
}
$changeUrl.addEventListener('input', addUrl);

function theSubmit(event) {
  var $submitObj = {};
  $submitObj.value = event.target.value;
  $submitObj.name = event.target.name;
  $submitObj.id = data.nextEntryId;
  localStorage.setItem($submitObj.name, $submitObj.value);
  data.nextEntryId++;
  data.entries.unshift($submitObj);
  $photoUrl.src = '';
  inputValues.value = '';
}
$formVar.addEventListener('submit', theSubmit);
