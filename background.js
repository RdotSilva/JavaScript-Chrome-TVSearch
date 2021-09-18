chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.tabs.create({
      url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
    });
  });
});

console.log("Background script running");
