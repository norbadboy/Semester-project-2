import { load } from "/src/js/storage/load.mjs";
import { getList } from "/src/js/api/listing/getList.mjs";
import { getCredit } from "/src/js/api/listing/getCredit.mjs";
import { bidListener } from "/src/js/listeners/listing/bid.mjs";

function renderListingInfo(item, highestBid) {
  return `
          <div class="itemInfo">
           <div class="d-flex">
             <div class="sellerImage">
              <img src="${item.seller.avatar}" alt="${
    item.seller.name
  }" class="img-thumbnail" style="width: 60px; height: 60px" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/320px-Image_not_available.png'">
             </div>
              <div class="sellerName">
             <p>${item.seller.name}</p>
             </div>
            </div>
           <h1>${item.title}</h1>
          </div>
          <div class="itemImage">
            <img src="${item.media}" alt="${
    item.title
  }" class="img-thumbnail" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/320px-Image_not_available.png'">
          </div>
          <div class="itemDescription mt-3 d-flex"> 
            <p class="itemDescription">${item.description}</p>
          </div>
          <div class="itemBid d-flex flex-column mt-3 align-items-start">
            <div class="d-flex mt-1 justify-content-center">
            <p class="bidText">Amount of bids: </p>
            <p class="bidItemText">${item._count.bids}</p>
            </div>
            <div class="d-flex mt-1 justify-content-center">
            <i class="fas fa-dollar-sign d-flex"></i>
            <p class="bidText">Highest bid: </p>
            <p class="bidItemText">${highestBid}</p>
            </div>
            <div class="d-flex mt-1 justify-content-center">
            <i class="fas fa-clock"></i>
            <p class="bidText">Ends at: </p>
            <p class="bidItemText">${new Date(item.endsAt).toLocaleString()}</p>
            </div>
          </div>
        `;
}

function renderBidLog(bids) {
  let result = "";
  bids.forEach((bid) => {
    result += `
    <li class="py-1"> - ${bid.bidderName} :  <strong>${bid.amount}</strong>  (${new Date(
      bid.created
    ).toLocaleString()})</li> 
    `;
  });
  return result;
}

export async function renderRegisteredList() {
  const list = await getList();

  const userName = document.getElementById("userName");
  const userAvatar = document.getElementById("userAvatar");

  const user = await load("user");
  userName.innerHTML = `<a class="nav-link" id="navUserName" href="/profile/edit/">${user.name}</a>`;
  userAvatar.innerHTML = `
                          <a class="nav-link" href="/profile/edit/">                        
                             <img src="${user.avatar}" alt="${user.name}" class="userImage" style="width: 100px; height: 100px">
                          </a>
  `;

  const listContainer = document.querySelector(".listContainer");
  listContainer.innerHTML = "";
  list.forEach((item) => {
    const bids = item.bids;
    const onlyAmountBids = bids.map((bid) => bid.amount);
    const highestBid = onlyAmountBids.length > 0 ? Math.max(...onlyAmountBids) : 0;

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
                             <div class="cardBody rounded text-center mt-3 p-4">
                             <div >
                             </div class="d-flex mt-3 justify-content-center">
                                ${renderListingInfo(item, highestBid)}
                             <div class="d-flex flex-grow-1 justify-content-start mt-4" >
                              <form class="bidForm d-flex mt-4">
                               <input 
                                name="listingId"
                                value="${item.id}"
                                hidden/>
                               <input
                                class="form-control me-2"
                                type="number"
                                placeholder="Amount"
                                aria-label="amount"
                                name="amount"
                               />
                              <button class="btn btn-primary" id="bidButton" type="submit" onClick="setTimeout(() => {
                                window.location.reload();
                              }, 1000);">Bid</button>
                               </form>
                                <div class="dropdown dropstart mt-4 d-flex justify-content-end flex-grow-1">
                                <button type="button" class="btn btn-primary dropdown-toggle"         data-bs-toggle="dropdown">
                                  Bids Info  </button>
                                  <ul class="dropdown-menu p-3">
                                    <li>
                                     ${renderBidLog(bids)} 
                                    </li>
                                  </ul>
                                </div>
                               </div>
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
