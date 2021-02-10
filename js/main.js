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
  data.entries.unshift($submitObj);
  data.nextEntryId++;
  $photoUrl.src = 'images/placeholder-image-square.jpg';
  $formVar.reset();
}

$formVar.addEventListener('submit', theSubmit);
var journalEntry = document.querySelector('.listEntries');
function journalReturn(data) {
  var newListItem = document.createElement('li');
  newListItem.className = 'newEntry row';
  journalEntry.appendChild(newListItem);
  var divColumn = document.createElement('div');
  newListItem.appendChild(divColumn);
  divColumn.className = 'column-half';
  var newImage = document.createElement('img');
  divColumn.appendChild(newImage);
  newImage.className = 'entry-pic';
  newImage.setAttribute('src', data.entries[0].imageURL);
  var divColumn2 = document.createElement('div');
  newListItem.appendChild(divColumn2);
  divColumn2.className = 'column-half';
  var newTitle = document.createElement('h3');
  divColumn2.appendChild(newTitle);
  newTitle.className = 'titles';
  newTitle.textContent = data.entries[0].title;
  var newNotes = document.createElement('p');
  divColumn2.appendChild(newNotes);
  newNotes.className = 'entry-notes';
  newNotes.textContent = data.entries[0].notes;
  return journalEntry;
}

var theList = document.querySelector('.listEntries');
$formVar.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newListEntries = journalReturn(data);
    theList.appendChild(newListEntries);

  }
});
