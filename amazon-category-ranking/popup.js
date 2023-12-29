document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getCategory" }, function(response) {
      if (response && response.categoryHtml) {
        const formattedHtml = formatCategoryHtml(response.categoryHtml);
        document.getElementById('result').innerHTML = formattedHtml;

        // リンクにイベントリスナーを追加して、新しいタブで開くようにする
        Array.from(document.querySelectorAll('#result a')).forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            chrome.tabs.create({ url: this.href });
          });
        });
      } else {
        document.getElementById('result').textContent = 'Category ranking not found.';
      }
    });
  });
});

function formatCategoryHtml(html) {
  // HTML文字列をDOMノードに変換
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // ランキング情報を整形
  let formattedHtml = '<div class="ranking-title">Amazon Category Ranking:</div>';
  const rankings = tempDiv.querySelectorAll('a');

  rankings.forEach(link => {
    if (link.href) {
      // 相対リンクを絶対リンクに変換
      const absoluteLink = link.href.startsWith('/') ? `https://www.amazon.co.jp${link.href}` : link.href;
      // リンクテキストと組み合わせて整形
      formattedHtml += `<div class="ranking"><a href="${absoluteLink}" class="category-link">${link.textContent}</a></div>`;
    }
  });

  return formattedHtml;
}
