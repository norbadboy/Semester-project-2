import { getProfile, getUserListing } from "/src/js/api/profile/getProfile.mjs";

export async function renderProfile(name) {
  const profile = await getProfile(name);

  const profileContainer = document.querySelector("#profileContainer");
  profileContainer.innerHTML = "";
  const profileInfo = document.createElement("div");
  profileInfo.classList.add("profileInfo");
  profileInfo.innerHTML = `
                          <div class="d-flex flex-column card mt-4 px-4 py-5">
                          <div class="d-flex flex-grow-1 justify-content-center mb-4">
                            <h1> Profile </h1>
                          </div>
                          <div class="profileBody d-flex">
                          <div class="profileColumn-1 d-flex flex-grow-1 justify-content-center mx-2">
                            <img src="${profile.avatar}" 
                                 alt="${profile.name}" 
                                 class="profileImage rounded">
                          </div>
                            <div class="profileColumn-2 d-flex flex-column flex-grow-1">
                              <div class="d-flex">
                                <h3> Username: </h3>
                                <h5 class="mx-2"> ${profile.name} </h5>
                              </div>
                              <div class="d-flex mt-2">
                              <h3> Email: </h3>
                              <h5 class="mx-2"> ${profile.email} </h5>
                            </div>
                              <div class="d-flex mt-2">
                                <h3> Credits: </h3>
                                <h5 class="mx-2">${profile.credits}</h5>
                              </div>
                              <div class="d-flex mt-2">
                                <h3> Wins: </h3>
                                <h5 class="mx-2">${[profile.wins]}</h5>
                              </div>
                              <div class="d-flex mt-2">
                                <h3> Published listings: </h3>
                                <h5 class="mx-2">${profile._count.listings}</h5>
                              </div>
                              <div class="d-flex mt-4">
                                <a href="/profile/avatar/" class="btn btn-secondary" type="button" id="editButton">Edit Avatar</a>
                              </div>
                            </div>
                          </div>
                        </div>
                          `;
  profileContainer.appendChild(profileInfo);
  return profile;
}

export async function userListing(name) {
  const userListing = await getUserListing(name);

  const userListingContainer = document.querySelector("#userListingContainer");
  userListingContainer.innerHTML = "";
  userListing.forEach((listing) => {
    const listContainer = document.createElement("div");
    listContainer.classList.add("itemContainer");
    listContainer.innerHTML = `
                              <div class="cardBody flex-column card mt-4 px-4 py-5">  
                                <div class="d-flex flex-grow-1 justify-content-center mb-2">
                                  <h1> ${listing.title} </h1>
                                </div>
                                <div class="listBody d-flex">
                                  <div class="d-flex flex-grow-1 justify-content-center">
                                    <img src="${listing.media}"
                                      alt="${listing.title}"
                                      class="listImage rounded">
                                  </div>  
                                </div>
                                <div class="itemDescriptionBody mt-4 d-flex"> 
                                  <p class="itemDescription">${listing.description}</p>
                                </div>
                                <div class="d-flex mt-1 justify-content-center mt-4">
                                  <p class="bidText">Amount of bids: </p>
                                  <p class="bidItemText">${listing._count.bids}</p>
                                </div>
                                <div class="d-flex mt-2 justify-content-center">
                                  <i class="fas fa-clock"></i>
                                  <p class="bidText">Ends at: </p>
                                  <p class="bidItemText">${new Date(
                                    listing.endsAt
                                  ).toLocaleString()}</p>
                                </div>
                              </div>
                              `;
    userListingContainer.appendChild(listContainer);
  });
  return userListing;
}
