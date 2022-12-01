import { getProfile } from "/src/js/api/profile/getProfile.mjs";

export async function renderProfile(name) {
  const profile = await getProfile(name);
  const profileContainer = document.querySelector("#profileContainer");
  profileContainer.innerHTML = "";
  const profileInfo = document.createElement("div");
  profileInfo.classList.add("profileInfo");
  profileInfo.innerHTML = `
    <div class="card mt-3 p-4" style="height: 600px;">
    <div class="profileInfo">
        <h3>${profile.name}</h3>
        <p>${profile.email}</p>
    </div>
    <div class="profileImage">
            <img src="${profile.avatar}" alt="${profile.name}" class="img-thumbnail">
    </div>
    <div>
    <a href="/profile/avatar/" class="btn btn-secondary mt-3" type="button" id="editAvatarButton">Edit Avatar</a>
    </div>
    <div class="profileCredits mt-3">
        <p>Current credits: ${profile.credits}</p>
    </div>
</div>
    `;
  profileContainer.appendChild(profileInfo);
  return profile;
}
