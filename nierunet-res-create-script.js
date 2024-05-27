// nieru.net res Create script
// Created By Ame_x
// Remixed By Komepiri


const interval = 2;
setInterval(() => {
    fetch(location.href + "/nm", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "ja,en-US;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryjneWBulFWw9tUTxj",
    "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "PHPSESSID=d9f387f634e983f5b9949a851ba05b22; _gid=GA1.2.2171898.1704365164; cf_clearance=k0DfGCd0STG_VFtxh2Wk8zyU5QWFef61tRhSN2qc21Q-1704365271-0-2-d2804aa6.2469499c.3e3e30b4-0.2.1704365271; cookie_posts=%7B%22board%22%3A%7B%22chatpark%22%3A%7B%22name%22%3A%22https%3A%5C%2F%5C%2Ftwitter.com%5C%2Famex2189%22%2C%22del_pass%22%3A%22a%22%2C%22email%22%3Anull%2C%22edit_pass%22%3A%22a%22%2C%22thread%22%3A%7B%22202580%22%3A%7B%22respass%22%3A%22%22%7D%7D%7D%7D%7D; _ga_PYT9H8HVLY=GS1.1.1704365163.1.1.1704365686.0.0.0; _ga=GA1.2.304695959.1704365163",
    "Referer": location.href + "/nm",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\n<name>"+"\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"usr1\"\r\n\r\n\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"message\"\r\n\r\n<message>"+"\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"submit\"\r\n\r\n投稿\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"mail\"\r\n\r\n\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"files[]\"; filename=\"\"\r\nContent-Type: application/octet-stream\r\n\r\n\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"edit\"\r\n\r\na\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"del\"\r\n\r\na\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj\r\nContent-Disposition: form-data; name=\"respass\"\r\n\r\n\r\n------WebKitFormBoundaryjneWBulFWw9tUTxj--\r\n",
  "method": "POST"
});
}, interval * 1800)
