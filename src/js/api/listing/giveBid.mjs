import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { autFetch } from "/src/js/api/headers.mjs";

const action = "/listings";
const method = "POST";

// Create new listing
export async function giveBid({ amount, listingId }) {
  const amountAsNumber = Number(amount);

  //  current body er 10
  // body skal være {amount: 10}
  const createListURL = API_AUCTION_PATH + action + "/" + listingId + "/bids";
  const response = await autFetch(createListURL, {
    method: method,
    body: JSON.stringify({ amount: amountAsNumber }),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
