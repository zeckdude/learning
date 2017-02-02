$(function() {
  // nunjucks.configure( '../views', {
  //     autoescape: true,
  //     cache: false
  // });

  var env = new nunjucks.Environment(new nunjucks.WebLoader('../views'));

  function renderProducts() {
    $.ajax({
      url: '/products',
      contentType: 'application/json',
      method: 'GET',
      success: function(response) {
        var $tableBody = $('#products-table-body');
        $tableBody.html('');

        var template = env.getTemplate('_item-row.html');

        response.products.forEach(function(product) {
          $tableBody.append(
            nunjucks.render( template, { id: product.id, name: product.name } )
          );
        });
      }
    });
  }

  renderProducts();

  // READ/GET
  $('#get-button').on('click', renderProducts);

  // CREATE/POST
  $('#create-form').on('submit', function(event) {
    event.preventDefault();

    var $createInput = $('#create-input');

    if ($createInput.val() === '') {
      alert('Please enter a value');
      return;
    }

    $.ajax({
      url: '/products',
      contentType: "application/json",
      method: 'POST',
      data: JSON.stringify({
        name: $createInput.val()
      }),
      success: function(response) {
        $createInput.val('');
        renderProducts();
      }
    });
  });

  // UPDATE/PUT
  $('table').on('click', '.update-button', function() {
    var $thisRow = $(this).closest('tr');
    var productId = Number($thisRow.find('.product-id').text());
    var newName = $thisRow.find('.product-name').val();

    $.ajax({
      url: '/products/' + productId,
      contentType: "application/json",
      method: 'PUT',
      data: JSON.stringify({
        newName: newName
      }),
      success: function(response) {
        renderProducts();
      }
    });
  });

  // DELETE
  $('table').on('click', '.delete-button', function() {
    var $thisRow = $(this).closest('tr');
    var productId = Number($thisRow.find('.product-id').text());

    $.ajax({
      url: '/products/' + productId,
      contentType: "application/json",
      method: 'DELETE',
      success: function(response) {
        console.log(response);
        renderProducts();
      }
    });
  });


});
