function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  fetch('http://localhost:9191/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.status === 200) {
      window.location.href = 'admin-dashboard.html';
      alert("Admin Login Successful!");
    } else {
      alert("Invalid Login! Please Try again.");
    }
  })
  .catch(error => {
    console.error('Fetch operation error:', error);
    // handle error
  });
}