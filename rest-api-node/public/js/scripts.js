$(function() {
  nunjucks.configure( '../views', {
      autoescape: true,
      cache: false
  });

  function renderProducts() {
    $.ajax({
      url: '/products',
      contentType: 'application/json',
      type: 'GET',
      success: function(response) {
        console.log(response);
        var $tableBody = $('#products-table-body');
        $tableBody.html('');

        response.products.forEach(function(product) {
          $tableBody.append(
            nunjucks.render( '_item-row.html', { id: product.id, name: product.name } )
          );
        });
      }
    });
  }

  // READ/GET
  $('#get-button').on('click', renderProducts);

  // CREATE/POST
  $('#create-form').on('submit', function(event) {
    event.preventDefault();

    var $createInput = $('#create-input');

    $.ajax({
      url: '/products',
      contentType: "application/json",
      type: 'POST',
      data: JSON.stringify({
        name: $createInput.val()
      }),
      success: function(response) {
        $createInput.val('');
        renderProducts();
      }
    });
  });


});
