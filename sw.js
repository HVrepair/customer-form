/* customer-form：間違えて入った HVRC業務 の裏の処理を、お客様の端末から外すためのファイル */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(self.registration.unregister().then(function () {
    return self.clients.matchAll({ type: 'window' });
  }).then(function (list) {
    list.forEach(function (c) { if (c.navigate) c.navigate(c.url); }); // 開いている画面を読み直して、元のお客様用フォームに戻す
  }));
});
