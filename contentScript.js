const text = [];

const allATags = document.getElementsByTagName("a");

// Get the text of all links on page and push to local storage
for (const tag of tags) {
  text.push(tag.textContent);
}

chrome.storage.local.set({
  text,
});

// Send the response callback
chrome.runtime.sendMessage(null, text, (response) => {
  console.log("Incoming from send response function: " + response);
});
