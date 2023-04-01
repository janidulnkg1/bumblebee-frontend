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
    if (response.status === 200) {
      window.location.href = 'login.html';
      alert("Account created Successfully!");
    } else {
      alert("Account creation failed!");
    }
  })
  .catch(error => {
    console.error('Fetch operation error:', error);
    // handle error
  });
}