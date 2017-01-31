$(function() {
  // READ/GET
  $('#get-button').on('click', function() {
    $.ajax({
      url: '/productsfdgdfg',
      contentType: 'application/json',
      success: function(response) {
        console.log(response);
      }
    });
  });


});
