$(() => {
  $('#options-submit').on('click', function(event) {
    event.preventDefault();

    var $options = $('.options').children().find('h3');
    var dataObj = makeDataObject($options);
    $.ajax({
      url: '/:id',
      method: 'POST',
      data: dataObj,
      success: function(){
        // hide form and show thank you
        $('.results-form').slideUp('slow', function(){
          $('.form-cont').append('<div class="alert alert-success thank-you">Thank you for your submission</div>');
        });
      }
    });
  });

});

function makeDataObject(options) {
  var obj = {}
  for (var title in options) {
    var rank = Number(title) + 1;
    if (rank) {
      var key = options[title].innerHTML;
      obj[key] = options.length - rank + 1;
    }
  }
  return obj;
}
