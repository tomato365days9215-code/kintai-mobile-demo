const CACHE_NAME="kintai-pro-demo-ui-v1";
const ASSETS=["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./icon-192.svg","./icon-512.svg"];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener("activate",event=>{event.waitUntil(self.clients.claim())});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET") return;
  event.respondWith(caches.match(event.request).then(cached=>{
    if(cached) return cached;
    return fetch(event.request).then(response=>{
      const clone=response.clone();
      caches.open(CACHE_NAME).then(cache=>cache.put(event.request,clone));
      return response;
    }).catch(()=>caches.match("./index.html"));
  }));
});
