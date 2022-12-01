import { remove } from "/src/js/storage/remove.mjs";

export async function logout() {
  remove("token");
  remove("user");
  window.location.href = "/";
}
