$(function() {
  // READ/GET
  $('#get-button').on('click', function() {
    $.ajax({
      url: '/products',
      contentType: 'application/json',
      type: 'POST',
      success: function(productsHTMLString) {
        var $tableBody = $('#products-table-body');
        $tableBody.html('');
        $tableBody.append(productsHTMLString);
      }
    });
  });


});
