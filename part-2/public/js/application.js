"use strict"

$(document).ready(function(){
  $('.sidebar').on('submit','#new-post-form', function(event){
    event.preventDefault()
    var $form = $(event.target);
    console.log($form.serialize)
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

// $(document).ready(function(){


// })





})
