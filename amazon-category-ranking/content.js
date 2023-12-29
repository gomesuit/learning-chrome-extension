chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getCategory") {
    const categoryElement = document.querySelector('#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span');
    if (categoryElement) {
      const category = categoryElement.innerText;
      sendResponse({ category: category });
    } else {
      sendResponse({ category: null });
    }
  }
  return true; // この行が非同期レスポンスを可能にします。
});
