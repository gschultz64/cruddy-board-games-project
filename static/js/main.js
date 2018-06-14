$(document).ready(function() {
  console.log("JS good to go, sir!");

  $('form').on('submit', function (e) {
    e.preventDefault();
    var newData = $(this).serialize();
    var url = $(this).attr('action');
    $.ajax({
      method: 'PUT',
      url: url,
      data: newData
    }).done(function (data) {
      console.log(data);
      window.location = '/games';
    });
  });

  $('#delete').on('click', function (e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $.ajax({
      method: 'DELETE',
      url: url
    }).done(function (data) {
      console.log(data);
      window.location = '/games';
    });
  });

});


// listen for a "submit" event for the edit page. the edit form will live
// at the path GET /games/:name/edit. Use AJAX to send a PUT request to the
// appropriate URL

// code here ...

// listen for clicks on "delete" links. use AJAX to send a DELETE HTTP request
// to the appropriate URL

// code here ...
