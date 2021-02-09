/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('.form');
// var inputValues = document.querySelectorAll('input');

function addUrl(event) {
  $photoUrl.src = event.target.value;
}
$changeUrl.addEventListener('input', addUrl);

function theSubmit(event) {
  event.preventDefault();
  var notesVal = $formVar.elements.notes.value;
  var titleVal = $formVar.elements.title.value;
  var $submitObj = {};
  $submitObj.notes = notesVal;
  $submitObj.title = titleVal;
  $submitObj.id = data.nextEntryId;
  // console.log('msg data: ', $submitObj);
  data.entries.unshift($submitObj);
  data.nextEntryId++;
  $formVar.reset();
}

$formVar.addEventListener('submit', theSubmit);
