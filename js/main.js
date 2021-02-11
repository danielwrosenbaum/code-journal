/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('.form');
var theList = document.querySelector('.listEntries');
var newButton = document.querySelector('.new-button');
var entries = document.querySelector('.entry');
var cancelButton = document.querySelector('.cancel-button');

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
  var newListEntries = journalReturn($submitObj);
  theList.prepend(newListEntries);
  data.nextEntryId++;
  $photoUrl.src = 'images/placeholder-image-square.jpg';
  $formVar.reset();
  $formVar.className = 'form hidden';
  entries.className = 'container entry';
}
$formVar.addEventListener('submit', theSubmit);

function journalReturn(data) {
  var newListItem = document.createElement('li');
  newListItem.className = 'newEntry row';
  theList.prepend(newListItem);
  var divColumn = document.createElement('div');
  newListItem.appendChild(divColumn);
  divColumn.className = 'column-half';
  var newImage = document.createElement('img');
  divColumn.appendChild(newImage);
  newImage.className = 'entry-pic';
  newImage.setAttribute('src', data.imageURL);
  var divColumn2 = document.createElement('div');
  newListItem.appendChild(divColumn2);
  divColumn2.className = 'column-half';
  var editButton = document.createElement('button');
  divColumn2.appendChild(editButton);
  editButton.className = 'edit-button';
  editButton.setAttribute('type', 'button');
  var editClass = document.createElement('i');
  editButton.appendChild(editClass);
  editClass.className = 'fas fa-pencil-alt';
  var newTitle = document.createElement('h3');
  divColumn2.appendChild(newTitle);
  newTitle.className = 'titles';
  newTitle.textContent = data.title;
  var newNotes = document.createElement('p');
  divColumn2.appendChild(newNotes);
  newNotes.className = 'entry-notes';
  newNotes.textContent = data.notes;
  var $editButton = document.querySelector('.edit-button');
  $editButton.addEventListener('click', function (event) {
    entries.className = 'hidden';
    $formVar.className = 'form';
  });
  return newListItem;
}
newButton.addEventListener('click', function (event) {
  entries.className = 'hidden';
  $formVar.className = 'form';
});
cancelButton.addEventListener('click', function (event) {
  $formVar.className = 'form hidden';
  entries.className = 'container entry';
});
window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var newListEntries = journalReturn(data.entries[i]);
    theList.append(newListEntries);
  }
});

theList.addEventListener('click', function (event) {

});
