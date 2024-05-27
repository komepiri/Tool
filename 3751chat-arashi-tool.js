// 3751chat Arashi Tool
// Created By Komepiri

const roomID = "<roomID>"; // 部屋のURLに書いてある
const auth = "<auth>"; // 部屋のURL(以下略)
// フォームデータを作成
const formData = new URLSearchParams();
formData.append('chat', 'メッセージ');

// fetchを使用してPOSTリクエストを送信
fetch(`https://www.3751chat.com/ajax.php?&room_id=${roomID}&fromsize=445&chatter_auth=${auth}`, {
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

