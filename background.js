chrome.runtime.onInstalled.addListener(() => {
  // Set default value for shows to avoid bad data on init
  chrome.storage.local.set({
    shows: [],
  });

  chrome.contextMenus.create({
    title: "Test Context Menu",
    id: "contextMenu",
    contexts: ["page", "selection"], // Only show context when user clicks page or selects
  });
  // chrome.contextMenus.onClicked.addListener((event) => {
  //   console.log(event);
  //   chrome.tabs.create({
  //     url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`,
  //   });
  // });
  // Fetch tv show data from API and add to chrome storage
  chrome.contextMenus.onClicked.addListener((event) => {
    fetch(`https://api.tvmaze.com/search/shows?q=girls`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        chrome.storage.local.set({
          shows: data,
        });
      });
  });
});

// Set listener to receive data from the runtime
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  sendResponse("Got the message from background");
  chrome.tab.sendMessage(sender.tab.id, "Got the message from background");
});
