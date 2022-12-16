import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";

const action = "/listings";

// List of all items in the database
// Limit is set to 12 items per page
// _bids=true&_active=true - to get bids and active items
export async function getList(limit = 10) {
  const listURL = `${API_AUCTION_PATH}${action}?limit=${limit}&_seller=true&_bids=true&_active=true&sort=created&sortOrder=desc`;
  const response = await fetch(listURL, {
    headers: headers("application/json"),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
