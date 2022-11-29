import { getList } from "/src/js/api/listing/getList.mjs";

export async function renderList() {
  const list = await getList();
  const listContainer = document.querySelector(".listContainer");
  listContainer.innerHTML = "";
  list.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");
    itemContainer.innerHTML = `
                             <div class="card mt-3 p-4" style="height: 600px;">
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
  return list;
}
