import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";
import { autFetch } from "/src/js/api/headers.mjs";

const action = "/listings";
const actionProfile = "/profiles";

// List of all items for unregistered user
// Limit is set to 12 items per page
export async function getList(limit = 12) {
  const listURL = `${API_AUCTION_PATH}${action}?limit=${limit}`;
  const response = await fetch(listURL, {
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}

export async function getListRegisteredProfile(name) {
  const listURL = `${API_AUCTION_PATH}${actionProfile}/${name}/listings`;
  const response = await autFetch(listURL, {
    headers: headers("application/json"),
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
