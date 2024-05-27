// drrrchat Arashi Tool
// https://drrrkari.com
// Created By Komepiri


// textareaの要素を取得
const textarea = document.querySelector('textarea[name="message"]');

// 送信ボタンの要素を取得
const submitButton = document.querySelector('input[type="submit"][name="post"]');

// 指定した文字列をtextareaに挿入し、submitボタンをクリックするやつ
function postMessage() {
    // 指定された文字列をtextareaに挿入
    const messageString = "メッセージ" + Math.random().toString(36).substring(7);
    textarea.value = messageString;
    
    // ボタンをクリック
    submitButton.click();
}

// 1.8秒ごとにpostMessage関数を呼び出す
setInterval(postMessage, 1800);
