import { changeAvatar } from "/src/js/api/profile/changeAvatar.mjs";

export async function renderChangeAvatar() {
  const profile = await changeAvatar();
  const avatar = document.querySelector("#avatarContainer");
  avatar.innerHTML = "";
  const avatarForm = document.createElement("div");
  avatarForm.classList.add("avatarForm");
  avatarForm.innerHTML = `
                          <div class="card mt-3 p-4">
                            <div class="avatarForm">
                            <h1 class="d-flex justify-content-center">Change Avatar</h1>
                            <div class="d-flex mt-4">
                              <div class="oldAvatarBody d-flex flex-column flex-grow-1 align-items-center">
                                <h4>Old avatar</h4>
                                  <div class="profileImage">
                                    <img src="${profile.avatar}" alt="${profile.name}" class="img-thumbnail">
                                  </div>
                                </div>
                              <div class="newAvatarBody d-flex flex-column flex-grow-1 align-items-start">
                                <h4>New avatar</h4>
                                <form id="avatarForm">
                                  <div class="form-group mt-3">
                                    <label for="avatar">Avatar URL</label>
                                    <input type="text" class="form-control mt-2" id="avatar" placeholder="Enter avatar URL">
                                  <button type="submit" class="btn btn-primary mt-3">Submit</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        `;
  avatar.appendChild(avatarForm);
  const avatarFormElement = document.querySelector("#avatarForm");
  avatarFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const avatarURL = document.querySelector("#avatar").value;
    await changeAvatar(avatarURL);
    window.location.href = "/profile/edit/";
  });
}
