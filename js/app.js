function addToDo(e) {
  e.preventDefault();

  // grab form data as array of objects
  var formData = $('form').serializeArray();

  // only add to-do when text has been entered into the input field
  if(formData[0].value !== "") {
  
    // create new elements that represent the list item
    $('.container').append("<div class='list-item'><p>" + formData[0].value + "</p><button class='delete'>&#10004</button></div>");
    
    // reset input field to blank and focus on it
    $('input')[0].value = '';
    $('input')[0].focus();

    // attach event listeners to each delete button on a list-item
    $('.list-item').on("click","button.delete",deleteToDo);

    // using jQuery UI to make list sortable
    $(".container").sortable();
    $(".container").disableSelection();
  }
}

function deleteToDo(e) {
  e.preventDefault();
  $(e.target).parent().remove();
}

$(document).ready(function() {
   // place focus on input field
   $('input')[0].focus();

  // event handler for form submission
  $('.form').submit(addToDo);
});
