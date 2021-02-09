/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('.form');

function addUrl(event) {
  $photoUrl.src = event.target.value;
}
$changeUrl.addEventListener('input', addUrl);

function theSubmit(event) {
  event.preventDefault();
  var notesVal = $formVar.elements.notes.value;
  var titleVal = $formVar.elements.title.value;
  var picVal = $formVar.elements.imageURL.value;
  var $submitObj = {};
  $submitObj.imageURL = picVal;
  $submitObj.notes = notesVal;
  $submitObj.title = titleVal;
  $submitObj.id = data.nextEntryId;
  // console.log('msg data: ', $submitObj);
  data.entries.unshift($submitObj);
  data.nextEntryId++;
  $photoUrl.src = 'images/placeholder-image-square.jpg';
  $formVar.reset();
}

$formVar.addEventListener('submit', theSubmit);
