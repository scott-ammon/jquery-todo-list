function addToDo(e) {
  e.preventDefault();

  var formData = $('form').serializeArray();
  
  console.log(formData);
  console.log('length', formData[0]);

  if(formData[0].value !== "") {
  
    $('.container').append("<div class='list-item'><p>" + formData[0].value + "</p><button class='delete'>&#10004</button></div>");
    
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
  $(e.target).fadeOut('slow');
  $(e.target).parent().remove();
}

$(document).ready(function() {
  
   // place focus on input field
   $('input')[0].focus();

  // event handler for form submission
  $('.form').submit(addToDo);
});
