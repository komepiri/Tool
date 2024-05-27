// Chatpark Realtime Edition Arashi Tool
// Created By Komepiri


const interval = 2;
setInterval(() => {
    const formData = new URLSearchParams();
    formData.append('comment', 'あなたのコメント');
    formData.append('color', '#000000'); // お好きな色コードを指定してください

    fetch("https://alicex.jp/chat_park/chat/1/view", {
        method: "POST",
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "ja,en-US;q=0.9,en;q=0.8",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "Referer": "https://alicex.jp/chat_park/chat/1/view",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: formData
    }).then(response => {
        if (response.ok) {
            console.log('POSTリクエストが成功しました。');
        } else {
            console.error('POSTリクエストが失敗しました。');
        }
    }).catch(error => {
        console.error('エラーが発生しました:', error);
    });
}, interval * 1800);
