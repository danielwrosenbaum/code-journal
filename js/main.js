/* global data */
/* exported data */
var $changeUrl = document.querySelector('input.image');
var $photoUrl = document.querySelector('img.pic');
var $formVar = document.querySelector('form');

function addUrl(event) {
  $photoUrl.src = event.target.value;
}
$changeUrl.addEventListener('input', addUrl);

function theSubmit(event) {
  var $submitObj = {};
  $submitObj.value = event.target.value;
  $submitObj.name = event.target.name;
  // console.log('submit: ', $submitObj);
  // var formName = $formVar.elements[name];
  // console.log('form name: ', formName);
  $submitObj = data.nextEntryId;
  // console.log('submit: ', $submitObj);
  data.nextEntryId++;

}
$formVar.addEventListener('submit', theSubmit);
