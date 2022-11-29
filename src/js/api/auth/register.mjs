import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";

const action = "/auth/register";
const method = "POST";

export async function register({ name, email, password, avatar }) {
  const registerURL = API_AUCTION_PATH + action;
  const body = JSON.stringify({ name, email, password, avatar });

  const response = await fetch(registerURL, {
    headers: headers("application/json"),
    method,
    body,
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Unable to register");
  }
}
