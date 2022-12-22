export async function renderList(list) {
  const listContainer = document.querySelector(".listContainer");
  listContainer.innerHTML = "";
  list.forEach((item) => {
    const bids = item.bids;
    const onlyAmountBids = bids.map((bid) => bid.amount);
    const highestBid = onlyAmountBids.length > 0 ? Math.max(...onlyAmountBids) : 0;

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
                             <div class="card cardBody p-4">
                                <div class="itemTitle d-flex justify-content-center">
                                    <h1>${item.title.toUpperCase()}</h1>
                                </div>
                                <div class="itemImage mt-3">
                                     <img src="${item.media}" alt="${
      item.title
    }" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/320px-Image_not_available.png'">
                                </div>
                                <div class="itemDescription my-3 d-flex">
                                <p class="itemDescription">${item.description}</p>
                                </div>
                                <div class="itemBid my-3 d-flex justify-content-around">
                                    <p class="numberOfBidsText">Number of bids: ${
                                      item._count.bids
                                    }</p>
                                    <p class="highestBidText">Highest bid: ${highestBid}</p>
                                </div>
                                <div class="d-flex mt-3 justify-content-center">
                                <a href="/profile/login/" class="btn btn-primary" type="button">Bid Now</a>
                                <div class="d-flex align-items-center">
                                <a href="/profile/login/">
                                <i class="fa-regular fa-heart"></i> 
                                </a>
                                </div>
                                </div>
                            </div>
            
    `;
    listContainer.appendChild(itemContainer);
  });

  return list;
}
