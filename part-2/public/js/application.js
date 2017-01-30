"use_strict";

$(document).ready(function() {
  $('#new-post-form').on('submit', function(event) {
    event.preventDefault();
    var $form = $(this);
    var postUrl = $form.attr('action');
    $.ajax({
      type: "POST",
      url: postUrl,
      data: $form.serialize(),
      success: function(response) {
        $('#comments').append(response);
        $('#new-post-form textarea, input:not(:last-child)').each(function() {
          $(this).context.value = null;
        });
      }
    });
  });

  $('#comments').on('submit', '.new-post-like-form', function(event) {
    event.preventDefault();
    var $form = $(this);
    $.ajax({
      type: "PUT",
      url: $form.attr('action'),
      success: function(response) {
        $form.closest('article').find('span:last-child').html(`${response} likes`);
      }
    });
  });
});
