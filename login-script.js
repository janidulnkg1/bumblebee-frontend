
const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Add event listener to form submit event
loginForm.addEventListener('submit', async (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get username and password values from input fields
  const username = emailInput.value;
  const password = passwordInput.value;

  try {
    // Send a POST request to the login API endpoint
    const response = await axios.post('/login', {
      username,
      password,
    });

    // If login is successful, store the token in local storage
    const token = response.data.token;
    localStorage.setItem('token', token);

    // Redirect to the dashboard or home page
    window.location.href = '/dashboard';
  } catch (error) {
    // If login fails, display an error message to the user
    console.error(error);
    alert('Login failed. Please try again.');
  }
});
