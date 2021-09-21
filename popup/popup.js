chrome.storage.local.get(["shows"], (res) => {
  for (const show of res.shows) {
    renderShow(show);
  }
});

function renderShow(show) {
  const showDiv = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = show.show.name;

  const image = document.createElement("img");
  image.src = show.show.image ? show.show.image.medium : null;

  const status = document.createElement("p");
  status.textContent = show.status ? show.show.status : "Unknown";

  showDiv.appendChild(title);
  showDiv.appendChild(image);
  showDiv.appendChild(status);
  document.body.appendChild(showDiv);
}
