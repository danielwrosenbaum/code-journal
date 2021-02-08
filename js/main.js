/* global data */
/* exported data */
var changeUrl = document.querySelector('input.image');
var photoUrl = document.querySelector('img.pic');

function addUrl(event) {
  photoUrl.src = event.target.value;
}
changeUrl.addEventListener('input', addUrl);
