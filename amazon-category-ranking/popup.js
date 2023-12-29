document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getCategory"}, function(response) {
      if (response && response.categoryHtml) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Category Ranking: <br>' + response.categoryHtml;

        // リンクを新しいタブで開くようにイベントリスナーを設定
        const links = resultDiv.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
          links[i].addEventListener('click', function(e) {
            e.preventDefault(); // デフォルトのリンク動作を防止
            chrome.tabs.create({url: e.target.href});
          });
        }
      } else {
        document.getElementById('result').textContent = 'Category ranking not found.';
      }
    });
  });
});
