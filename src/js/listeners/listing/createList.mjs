import { createList } from "../../api/listing/createList.mjs";

export function createListListener() {
  const createListingForm = document.getElementById("createListingForm");

  if (createListingForm) {
    createListingForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listData = Object.fromEntries(formData);

      createList(listData);
    });
  }
}
