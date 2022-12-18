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
                             <div class="card my-3 p-4" style="height: 590px">
                                <div class="itemInfo mt-4">
                                    <h1>${item.title}</h1>
                                </div>
                                <div class="itemImage mt-3">
                                     <img src="${item.media}" alt="${item.title}" onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/320px-Image_not_available.png'">
                                </div>
                                <div class="itemBid mt-3">
                                    <p class="numberOfBidsText">Number of bids: ${item._count.bids}</p>
                                    <p class="highestBidText">Highest bid: ${highestBid}</p>
                                </div>
                                <div class="d-flex justify-content-end">
                                <a href="/profile/login/" class="btn btn-primary" type="button">Bid Now</a>
                                </div>
                            </div>
            
    `;
    listContainer.appendChild(itemContainer);
  });

  return list;
}
