function handleAdminLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const adminData = {
      email: formData.get('admin-email'),
      password: formData.get('admin-password'),
    };
    fetch('http://localhost:9191/admin_login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(adminData)
    })
    .then(response => {
      if (response.status === 200) {
        window.location.href = 'admin-dashboard.html';
        alert("ADMIN Login Successful!");
      } else {
        alert("Invalid Login! Please Try again.");
      }
    })
    .catch(error => {
      console.error('Fetch operation error:', error);
      // handle error
    });
  }