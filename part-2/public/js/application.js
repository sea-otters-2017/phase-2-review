
$(document).ready(function(){

  $('.sidebar').on('submit','#new-post-form', function(event){
    event.preventDefault()
    var $form = $(event.target);
    $.ajax({
      type: "POST",
      url: $form.attr("action"),
      data: $form.serialize(),
      success: function(response){
        $("#comments").prepend(response)
        $('input[type=text], textarea').val('')

      }
    })
  })

  $('#post-list').on('submit', '.new-post-like-form', function(event){
    event.preventDefault()
    var $likebutton = $(this);
    var url = $(this).closest('form').attr('action')
    $.ajax({
      type: "PUT",
      url: url,
      success: function(response){
        $likebutton.closest('article').find('span#likes').html(response)
      }
    })

  })
})
