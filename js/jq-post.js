$('#submit-pic-form').on('submit', function(e) {           // When form is submitted
  e.preventDefault();                               // Prevent it being sent
  var details = $('#submit-pic-form').serialize(); 
  $.post('submit-form.php', details, function(data) {  // Use $.post() to send it
      $('#submit-pic-form').html(data);                    // Where to display result
  });
});