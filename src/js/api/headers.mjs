import { load } from "/src/js/storage/load.mjs";

// get token from local storage
export function headers() {
  const token = load("token");
  return {
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${token}`,
  };
}

// fetch token from API
export async function autFetch(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
