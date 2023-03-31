$(document).ready(function() {
    $('#signupForm').submit(function(event) {
      event.preventDefault();
      var formData = {
        email: $('#email').val(),
        password: $('#password').val(),
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val()
      };
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/signup',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
          $('#message').text(response);
        },
        error: function(xhr, status, error) {
          $('#message').text(xhr.responseText);
        }
      });
    });
  });