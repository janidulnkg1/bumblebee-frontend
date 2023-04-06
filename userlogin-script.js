function handleUserLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {
    email: formData.get('user-email'),
    password: formData.get('user-password'),
  };
  fetch('http://localhost:9191/user_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.status === 200) {
      window.location.href = 'user-dashboard.html';
      alert("User Login Successful!!");
    } else {
      alert("Invalid Login! Please Try again.");
    }
  })
  .catch(error => {
    console.error('Fetch operation error:', error);
    // handle error
  });
}

