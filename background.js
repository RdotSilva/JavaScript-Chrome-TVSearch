chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
  });
  chrome.contextMenus.create({
    title: "Test Context Menu 2",
    id: "contextMenu2",
    parentId: "contextMenu",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
  chrome.contextMenus.create({
    title: "Test Context Menu 3",
    id: "contextMenu3",
    parentId: "contextMenu2",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
});

console.log("Background script running");
