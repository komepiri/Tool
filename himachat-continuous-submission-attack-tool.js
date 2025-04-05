// himachat continuous-submission-attack-tool
// Created By Komepiri

// フォームデータを作成
const formData = new URLSearchParams();
formData.append('roomid', 'RoomID'); //部屋ID
formData.append('marumie', '1234567'); //必ずDevToolのネットワークから確認すること
formData.append('mysession', 'hoge'); //必ずDevToolのネットワークから確認すること
formData.append('waruguti', 'example'); // 送信したいこと

// fetchを使用してPOSTリクエストを送信
fetch('https://himachat.jp/gomitame.php?mode=monku', {
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

