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
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // handle success
    })
    .catch(error => {
      console.error('Fetch operation error:', error);
      // handle error
    });
}