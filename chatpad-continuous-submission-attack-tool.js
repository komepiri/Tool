// ChatPad continuous-submission-attack-tool
// Created By Komepiri


// textareaの要素を取得
const textarea = document.querySelector('textarea[id="sayField"]');

// 送信ボタンの要素を取得
const submitButton = document.querySelector('img[id="sayButton"]');

// 指定した文字列をtextareaに挿入し、submitボタンをクリックするやつ
function postMessage() {
    // 指定された文字列をtextareaに挿入
    const messageString = "こんにちは"; // メッセージ内容
    textarea.value = messageString;
    
    // ボタンをクリック
    submitButton.click();
}

// 1.8秒ごとにpostMessage関数を呼び出す
setInterval(postMessage, 1800);
