chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
  });
});

console.log("Background script running");
