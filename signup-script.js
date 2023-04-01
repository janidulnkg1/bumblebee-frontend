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
      // handle success
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // handle error
    });
}