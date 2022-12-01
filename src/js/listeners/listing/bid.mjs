import { giveBid } from "../../api/listing/giveBid.mjs";

export function bidListener() {
  const forms = document.querySelectorAll(".bidForm");

  if (forms.length > 0) {
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const bidData = Object.fromEntries(formData.entries());

        //       //send it to the API
        giveBid(bidData);
        //     });
        console.log(bidData);
      });
    });
  }
}
