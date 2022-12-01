import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";
import { load } from "/src/js/storage/load.mjs";

const action = "/profiles";
const method = "PUT";

// changeAvatar
export async function changeAvatar(avatar) {
  const profile = load("user");
  const userName = profile.name;
  const profileURL = `${API_AUCTION_PATH}${action}/${userName}/media`;
  const response = await fetch(profileURL, {
    headers: headers("application/json"),
    method,
    body: JSON.stringify({ avatar }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
