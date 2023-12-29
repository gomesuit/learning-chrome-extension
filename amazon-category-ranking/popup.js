document.getElementById('getRanking').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getCategory
    }, (injectionResults) => {
      for (const frameResult of injectionResults)
        if (frameResult.result) {
          const category = frameResult.result;
          document.getElementById('result').textContent = 'Category: ' + category;
          // ここでカテゴリランキングページへのリンクを生成する
        } else {
          document.getElementById('result').textContent = 'Category not found.';
        }
    });
  });
});

function getCategory() {
  const categoryElement = document.querySelector(/* セレクタを指定 */);
  return categoryElement ? categoryElement.textContent : null;
}
