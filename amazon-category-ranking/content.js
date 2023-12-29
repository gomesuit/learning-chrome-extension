chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getCategory") {
    const categoryElement = document.querySelector(/* セレクタを指定 */);
    if (categoryElement) {
      const category = categoryElement.textContent;
      sendResponse({ category: category });
    }
  }
});

