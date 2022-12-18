import { login } from "/src/js/api/auth/login.mjs";

export function loginListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      console.log(form);
      console.log(formData);
      console.log(profile);
      //send it to the API
      login(profile);
    });
  }
}
