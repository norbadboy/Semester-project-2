const redirectPage = document.querySelector("#newUser");

// Redirect to login page when new user is registered
export function handleSubmission() {
  redirectPage.innerHTML = "";

  redirectPage.innerHTML = `
                            <div class="d-flex flex-column m-5">
                            <h1 class="text-center mb-3">Welcome to Contactbook</h1>
                            <p class="text-center">You'll be now redirected to the login page</p>
                            <p class="text-center">
                            Please <a href="/profile/login/">click here</a> if you're not redirected within 10 seconds
                            </p>
                            </div>                          
 `;

  setTimeout(() => {
    window.location.assign("/profile/login/");
  }, 5000);
}
