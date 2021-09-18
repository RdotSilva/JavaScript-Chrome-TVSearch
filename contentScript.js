const text = [];

const allATags = document.getElementsByTagName("a");

// Get the text of all links on page and push to local storage
for (const tag of tags) {
  text.push(tag.textContent);
}

chrome.storage.local.set({
  text,
});

chrome.runtime.sendMessage(null, text);
