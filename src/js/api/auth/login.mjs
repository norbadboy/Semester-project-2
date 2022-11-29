import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";
import * as storage from "/src/js/storage/index.mjs";

const action = "/auth/login";
const method = "POST";

// login
export async function login({ email, password }) {
  const loginURL = API_AUCTION_PATH + action;
  const body = JSON.stringify({ email, password });

  const response = await fetch(loginURL, {
    headers: headers("application/json"),
    method,
    body,
  });

  if (response.ok) {
    const profile = await response.json();
    storage.save("token", profile.accessToken);
    delete profile.accessToken;
    storage.save("user", profile);
    window.location.href = "/listing/homepage";
  } else {
    alert("wrong email or password");
  }
  login(email, password);
}
