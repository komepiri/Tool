// himachat Chatroom Create Tool
// Created By Komepiri

// フォームデータを作成
const formData = new URLSearchParams();
formData.append('marumie', '52447635'); //多分変更必須
formData.append('mysession', '8c0dodbvj5c8swko8g84ws08c'); //多分変更必須
formData.append('roomname', 'aaa'); // 部屋名
formData.append('roompass', 'kome'); // 部屋管理パス
formData.append('shoukai', 'aaa'); // 部屋紹介
formData.append('kakolog', '0'); // 0固定でいい
formData.append('tuuwa', '0'); // 0固定でいい
formData.append('ninzuu', '50'); // 部屋最大人数
formData.append('douituip', '1'); // 同一IPの入室許可
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

