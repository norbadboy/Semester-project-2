import { renderRegisteredListTemplate } from "/src/js/templates/listing/registeredListTemplate.mjs";
import { load } from "/src/js/storage/load.mjs";
import { getList } from "/src/js/api/listing/getList.mjs";
import { getCredit } from "/src/js/api/listing/getCredit.mjs";

export async function renderRegisteredList(onlyUserListings = false) {
  const registeredListings = await getList();

  let listingToShow = registeredListings.slice(0, 5);
  const profile = load("user");
  const userName = profile.name;

  const listContainer = document.querySelector("#registeredListings");

  listContainer.innerHTML = "";
  registeredListings.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
    <div class="card mt-3 p-4" style="height: 800px;">
    <div class="itemInfo">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    </div>
    <div class="itemImage">
         <img src="${item.media}" alt="${item.title}" class="img-thumbnail">
    </div>
    <div class="itemBid">
        <p>Current bid: ${item._count.bids}</p>
    </div>
</div>

    `;
    listContainer.appendChild(itemContainer);
  });
  return registeredListings;
}

export async function renderUserCredit() {
  const profile = load("user");
  const userName = profile.name;
  const credit = await getCredit(userName);
  const creditContainer = document.querySelector("#userCredit");
  creditContainer.innerHTML = "";
  const userCredit = document.createElement("div");
  userCredit.classList.add("userCredit");
  userCredit.innerHTML = `
<div>
<p>Credits: ${credit.credits}</p>
</div>
  `;
  creditContainer.appendChild(userCredit);
}
