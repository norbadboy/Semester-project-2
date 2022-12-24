import { registerListener } from "./listeners/auth/register.mjs";
import { loginListener } from "./listeners/auth/login.mjs";
import { logoutListener } from "/src/js/listeners/auth/logout.mjs";
import { createListListener } from "/src/js/listeners/listing/createList.mjs";

const path = window.location.pathname;

// Set listeners when on path
if (path === "/profile/register/") {
  registerListener();
} else if (path === "/profile/login/") {
  loginListener();
} else if (path === "/listing/homepage/") {
  createListListener();
  logoutListener();
} else if (path === "/listing/all/" || path === "/profile/avatar/" || path === "/profile/edit/") {
  logoutListener();
}
