document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: "getCategory"}, function(response) {
      if (response && response.categoryHtml) {
        document.getElementById('result').innerHTML = 'Category Ranking: <br>' + response.categoryHtml;
      } else {
        document.getElementById('result').textContent = 'Category ranking not found.';
      }
    });
  });
});
