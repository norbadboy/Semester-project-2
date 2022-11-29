import { registerListener } from "./listeners/auth/register.mjs";
import { loginListener } from "./listeners/auth/login.mjs";

const path = window.location.pathname;

// Set listeners when on path
if (path === "/profile/register/") {
  registerListener();
} else if (path === "/profile/login/") {
  loginListener();
}
