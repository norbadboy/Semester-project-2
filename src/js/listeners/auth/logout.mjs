import { logout } from "/src/js/api/auth/logout.mjs";

export async function logoutListener() {
  const logoutButton = document.querySelector("#logoutButton");

  if (logoutButton) {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();
      logout();
    });
  }
}
