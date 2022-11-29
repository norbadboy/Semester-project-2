import { register } from "/src/js/api/auth/register.mjs";
import { handleSubmission } from "/src/js/tools/redirectRegister.mjs";

export async function registerListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      // send the profile to the server
      try {
        register(profile);
        handleSubmission();
      } catch (error) {
        return alert("There was a problem creating your account");
      }
    });
  }
}
