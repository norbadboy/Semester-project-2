import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";
import { load } from "/src/js/storage/load.mjs";

const action = "/profiles";
const method = "GET";

// getProfile
export async function getProfile() {
  const profile = load("user");
  const userName = profile.name;
  const profileURL = `${API_AUCTION_PATH}${action}/${userName}?_listings=true`;
  const response = await fetch(profileURL, {
    headers: headers("application/json"),
    method,
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
