chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getCategory") {
    const categoryElement = document.querySelector('#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span');
    if (categoryElement) {
      let categoryHtml = categoryElement.innerHTML;
      // 相対パスのリンクを絶対パスに変換
      categoryHtml = categoryHtml.replace(/href="\//g, 'href="https://www.amazon.co.jp/');
      sendResponse({ categoryHtml: categoryHtml });
    } else {
      sendResponse({ categoryHtml: null });
    }
  }
  return true; // 非同期レスポンスのために true を返す
});
