function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  };
  fetch('http://localhost:9191/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
    
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      alert("Account Creation Successful!");

      // handle success
    })
    .catch(error => {
      console.log('Account Creation Error!', error);
      // handle error
    });
}

function showLoginSuccess(){
  alert("Account Created Successfully!");
  resetForm(); 
  reloadPage();
}

function resetForm() {
  form.reset(); 
}

function reloadPage() {
  location.reload();
}