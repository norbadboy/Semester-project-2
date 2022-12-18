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
        <h1>Change Avatar</h1>
        <h4>Old avatar</h4>
        <div class="profileImage">
            <img src="${profile.avatar}" alt="${profile.name}" class="img-thumbnail">
        </div>
        <h4 class="mt-3">New avatar</h4>
        <form id="avatarForm">
            <div class="form-group">
                <label for="avatar">Avatar URL</label>
                <input type="text" class="form-control" id="avatar" placeholder="Enter avatar URL">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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
