/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('.form');
var theList = document.querySelector('.listEntries');
var newButton = document.querySelector('.new-button');
var entries = document.querySelector('.entry');
var cancelButton = document.querySelector('.cancel-button');
var newEntrytitle = document.querySelector('.newEntry');
var $buttonContainer = document.querySelector('.button-container');
var $editOldButton = document.createElement('button');
var $saveButton = document.querySelector('.save-button');

function addUrl(event) {
  $photoUrl.src = event.target.value;
}
$changeUrl.addEventListener('input', addUrl);
$formVar.addEventListener('submit', theSubmit);
$editOldButton.addEventListener('click', editEntry);
var newListEntries;
var editListEntries;

function theSubmit(event) {
  event.preventDefault();
  var notesVal = $formVar.elements.notes.value;
  var titleVal = $formVar.elements.title.value;
  var picVal = $formVar.elements.imageURL.value;
  var $submitObj = {
    imageURL: picVal,
    notes: notesVal,
    title: titleVal,
    id: data.nextEntryId
  };

  data.entries.unshift($submitObj);
  newListEntries = journalReturn($submitObj);
  theList.prepend(newListEntries);
  data.nextEntryId++;
  // if (data.editing !== null) {
  //   editListEntries = journalReturn($submitObj);
  //   newListEntries.replaceWith(editListEntries);
  //   newListEntries.remove();
  // } else {

  // }
  $photoUrl.src = 'images/placeholder-image-square.jpg';
  $formVar.reset();
  $formVar.className = 'form hidden';
  entries.className = 'container entry';
}

function journalReturn(data) {

  var newListItem = document.createElement('li');
  newListItem.setAttribute('data-entry-id', data.id);
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
  $editButton.addEventListener('click', editFunction);
  return newListItem;
}

function editFunction(event) {
  var closestId = event.target.closest('li');
  var idNum = closestId.getAttribute('data-entry-id');
  var newNumber = Number(idNum);
  $saveButton.className = 'save-button right hidden';
  $buttonContainer.appendChild($editOldButton);
  $editOldButton.className = 'edit-old-button';
  $editOldButton.textContent = 'Edit';
  newEntrytitle.textContent = 'Edit Entry';
  data.editing = data.entries;
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i].id === newNumber) {
      $photoUrl.src = data.editing[i].imageURL;
      $formVar.elements.notes.value = data.editing[i].notes;
      $formVar.elements.title.value = data.editing[i].title;
      $formVar.elements.imageURL.value = data.editing[i].imageURL;
    }
  }
  entries.className = 'hidden';
  $formVar.className = 'form';
}

function editEntry(event) {
  for (var i = 0; i < data.entries.length; i++) {
    data.entries.splice(i, 1, data.editing[i]);
  }

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
    if (data.entries !== null) {
      editListEntries = journalReturn(data.entries[i]);
      newListEntries.replaceWith(editListEntries);
      newListEntries.remove();
    } else {
      theList.append(newListEntries);
    }
  }
});

theList.addEventListener('click', function (event) {

});
