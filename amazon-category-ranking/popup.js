document.getElementById('getRanking').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: getCategory
    }, (injectionResults) => {
      for (const frameResult of injectionResults)
        if (frameResult.result && frameResult.result.category) {
          const category = frameResult.result.category;
          document.getElementById('result').innerHTML = 'Category Ranking: <br>' + category;
          // HTMLを設定するためにinnerHTMLを使用します。
        } else {
          document.getElementById('result').textContent = 'Category ranking not found.';
        }
    });
  });
});

function getCategory() {
  const categoryElement = document.querySelector('#detailBulletsWrapper_feature_div > ul:nth-child(4) > li > span');
  return { category: categoryElement ? categoryElement.innerText : null };
}
