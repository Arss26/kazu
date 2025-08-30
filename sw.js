self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("kalkulator-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
function resetCalc() {
    total = 0;
    current = 0;
    history = [];
    updateDisplay();
}
function updateDisplay() {
  totalEl.textContent = total.toLocaleString("id-ID");
  currentEl.textContent = current.toLocaleString("id-ID");
  historyEl.innerHTML = history
    .map((h, i) => `<div>${i + 1}. ${h.op} ${h.val.toLocaleString("id-ID")}</div>`)
    .join("");
  saveState();
    })
  );
});
