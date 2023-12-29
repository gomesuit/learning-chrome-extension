chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getCategory") {
    // 複数のセレクタを試す
    const selectors = [
      '#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span',
      '#productDetails_detailBullets_sections1 > tbody > tr:nth-child(3) > td'
    ];

    for (let i = 0; i < selectors.length; i++) {
      const categoryElement = document.querySelector(selectors[i]);
      if (categoryElement) {
        let categoryHtml = categoryElement.innerHTML;
        categoryHtml = categoryHtml.replace(/href="\//g, 'href="https://www.amazon.co.jp/');
        sendResponse({ categoryHtml: categoryHtml });
        return true;
      }
    }

    // 適切な情報が見つからない場合
    sendResponse({ categoryHtml: null });
  }
  return true;
});
