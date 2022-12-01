import { renderRegisteredListTemplate } from "/src/js/templates/listing/registeredListTemplate.mjs";
import { load } from "/src/js/storage/load.mjs";
import { getList } from "/src/js/api/listing/getList.mjs";
import { getCredit } from "/src/js/api/listing/getCredit.mjs";
import { bidListener } from "/src/js/listeners/listing/bid.mjs";

function renderListingInfo(item, highestBid) {
  return `<div class="itemInfo">
  <h3>${item.title}</h3>
  <p>${item.description}</p>
</div>
<div class="itemImage">
   <img src="${item.media}" alt="${item.title}" class="img-thumbnail">
</div>
<div class="itemBid">
  <p>Amount of bids: ${item._count.bids}</p>
  <p class="text-info">Highest bid: ${highestBid}</p>
  <p>Ends at: ${new Date(item.endsAt).toLocaleString()}</p>
</div>
<div class="d-flex">
<form class="bidForm"
>
<input 
name="listingId"
value="${item.id}"
hidden
/>

<input
class="form-control me-2"
type="number"
placeholder="Amount"
aria-label="amount"
name="amount"
/>
<button class="btn btn-primary" id="bidButton" type="submit">Bid</button>
</form>
</div>`;
}

function renderBidLog(bids) {
  let result = "";
  bids.forEach((bid) => {
    result += `
    <li>${bid.bidderName} :  <strong>${bid.amount}</strong>  (${new Date(
      bid.created
    ).toLocaleString()})</li> 
    `;
  });
  return result;
}

export async function renderRegisteredList() {
  const list = await getList();
  const listContainer = document.querySelector(".listContainer");
  listContainer.innerHTML = "";
  list.forEach((item) => {
    const bids = item.bids;
    const onlyAmountBids = bids.map((bid) => bid.amount);
    const highestBid = Math.max(...onlyAmountBids);

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
                             <div class="card mt-3 p-4" style="height: 600px;">
                                ${renderListingInfo(item, highestBid)}

                                <div>
                                Bids Log
                                <button onclick="toggleBidLog()">
                                show bid log
                                </button>
                                <ul>
                                ${renderBidLog(bids)}
                                </ul>
                                </div>
                            </div>
            
    `;
    listContainer.appendChild(itemContainer);
  });
  bidListener();
  return list;
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
