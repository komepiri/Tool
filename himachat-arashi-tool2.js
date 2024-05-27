// ヒマコミュニティのタイムライン専用
// フォームデータを作成
const formData = new URLSearchParams();
formData.append('marumie', 'hoge'); // 必ずDevToolのネットワークから確認すること
formData.append('mysession', 'hoge'); // 必ずDevToolのネットワークから確認すること
formData.append('fnaiyou', 'hoge'); // 書きたいこと

// fetchを使用してPOSTリクエストを送信
fetch('https://himachat.jp/community/timeline_Toukou.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: formData.toString(),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.text();
})
.then(data => {
  console.log('POSTリクエストが成功しました:', data);
})
.catch(error => {
  console.error('エラーが発生しました:', error);
});

