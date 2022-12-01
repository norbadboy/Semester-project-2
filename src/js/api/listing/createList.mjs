import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { autFetch } from "/src/js/api/headers.mjs";

const action = "/listings";
const method = "POST";

// Create new listing
export async function createList(listData) {
  const createListURL = API_AUCTION_PATH + action;
  const response = await autFetch(createListURL, {
    method: method,
    body: JSON.stringify(listData),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
