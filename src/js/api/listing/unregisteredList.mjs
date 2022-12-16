import { getList } from "/src/js/api/listing/getList.mjs";
import { searchListener } from "/src/js/tools/searchBar/index.mjs";

export async function renderList() {
  const list = await getList();

  searchListener(list);

  const listContainer = document.querySelector(".listContainer");
  listContainer.innerHTML = "";
  list.forEach((item) => {
    const bids = item.bids;
    const onlyAmountBids = bids.map((bid) => bid.amount);
    const highestBid = Math.max(...onlyAmountBids);

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
                             <div class="card my-3 p-4" style="height: 650px;">
                             <div class="d-flex">
                             <div class="sellerImage">
                                    <img src="${item.seller.avatar}" alt="${item.seller.name}" class="img-thumbnail" style="width: 60px; height: 60px">
                             </div>
                              <div class="sellerName">
                                    <p>${item.seller.name}</p>
                              </div>
                             </div>
                             
                                <div class="itemInfo mt-4">
                                    <h3>${item.title}</h3>
                                </div>
                                <div class="itemImage mt-3">
                                     <img src="${item.media}" alt="${item.title}" class="img-thumbnail">
                                </div>
                                <div class="itemBid mt-3">
                                    <p>Amount of bids: ${item._count.bids}</p>
                                    <p class="text-info">Highest bid: ${highestBid}</p>
                                </div>
                            </div>
            
    `;
    listContainer.appendChild(itemContainer);
  });

  return list;
}
