/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousTodosJSON = localStorage.getItem('data');

window.addEventListener('load', function () {
  if (previousTodosJSON !== null) {
    data = JSON.parse(previousTodosJSON);
  }
});
window.addEventListener('beforeunload', function () {
  var todosJSON = JSON.stringify(data);
  localStorage.setItem('data', todosJSON);
});
