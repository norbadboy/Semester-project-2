import { API_AUCTION_PATH } from "/src/js/api/constants.mjs";
import { headers } from "/src/js/api/headers.mjs";

const action = "/profiles";

export async function getCredit(name) {
  const creditURL = `${API_AUCTION_PATH}${action}/${name}/credits`;
  const response = await fetch(creditURL, {
    headers: headers("application/json"),
    method: "GET",
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error(response.statusText);
}
