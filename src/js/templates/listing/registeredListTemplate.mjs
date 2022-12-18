import { load } from "/src/js/storage/load.mjs";

export async function registeredListTemplate(postData) {
  const profile = await load("user");
  const userName = profile.name;

  const post = document.createElement("div");
  post.classList.add("post", "card", "mb-3");
  const postTitle = document.createElement("h4");
  postTitle.classList.add("card-header");
  postTitle.innerText = postData.title;
  post.appendChild(postTitle);
  const postBody = document.createElement("div");
  postBody.classList.add("card-body");
  postBody.innerText = postData.body;
  post.appendChild(postBody);

  if (postData.media) {
    const postMedia = document.createElement("img");
    postMedia.classList.add("card-img-bottom");
    postMedia.src = postData.media;
    postMedia.alt = `Image from ${postData.title}`;
    postMedia.classList.add("img-fluid");
    post.appendChild(postMedia);
  }

  return post;
}

export function renderRegisteredListTemplate(postDataList, parent) {
  parent.innerHTML = "";
  parent.append(...postDataList.map(registeredListTemplate));
}
