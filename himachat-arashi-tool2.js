// ヒマコミュニティのタイムライン専用
// フォームデータを作成
const formData = new URLSearchParams();
formData.append('marumie', '52447635'); //多分変更必須
formData.append('mysession', '8c0dodbvj5c8swko8g84ws08c'); //多分変更必須
formData.append('fnaiyou', 'test'); // 書きたいこと

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

