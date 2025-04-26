// new server nieru.net thread Create script
// Created By Komepiri

setInterval(() => {
  const formData = new FormData();
  formData.append("title", "testaaaaaaaaaaaaa");
  formData.append("name", "a");
  formData.append("message", "a");
  formData.append("submit", "作成");
  formData.append("email", "");
  formData.append("files[]", new File([], ""));
  formData.append("edit_password", "a");
  formData.append("delete_password", "a");
  formData.append("post_password", "a");
  formData.append("view_password", "a");

  fetch("https://chatpark.nieru.net/create", {
    method: "POST",
    body: formData,
    credentials: "include",
    headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "Accept-Language": "ja",
      "Sec-CH-UA": '"Not:A-Brand";v="24", "Chromium";v="134"',
      "Sec-CH-UA-Mobile": "?0",
      "Sec-CH-UA-Platform": '"Linux"',
      "Upgrade-Insecure-Requests": "1"
    },
    mode: "cors"
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));
}, interval * 1800); // ←これは下で説明
