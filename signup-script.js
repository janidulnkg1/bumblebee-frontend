const form = document.getElementById("signup-form");
  const signupButton = document.getElementById("signup-button");

  signupButton.addEventListener("click", function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({firstName: firstName, lastName: lastName,email: email, password: password}),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    fetch('http://localhost:9191/signup', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  });