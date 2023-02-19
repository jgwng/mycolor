'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "46589ed287e40c9720d7e34921aab5e2",
"index.html": "cb7198d4ed940950752b53233eb884de",
"/": "cb7198d4ed940950752b53233eb884de",
"main.dart.js": "3cf09c6c0ed81710a6d672a0d23b054a",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "3e93cfe47c875fb2ac7a5451a3ad7153",
"icons/icon-192.png": "9bae2f7552a7005659cbcab390b4ad02",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
".git/ORIG_HEAD": "4530b91e980abc5b7e42ae03ecb27e3c",
".git/config": "8361923553159ea7332fc77187894e7c",
".git/objects/0c/0c5c07aac2e5ba2f3f092a0a59248a3866a923": "70043d11efce037f1412ce33de4a7119",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/60/5b0a883c5d2f7313b5f8d9eb2c516ae68f1a6f": "1c67f8733ffb447e11f34587a131b9a8",
".git/objects/5a/78f3d77e282bb3bba45b96f7fa6e22529666ef": "bcc4e2ba6db17f2c13f182e97cf403fe",
".git/objects/05/eeb72a59dcb626de2141d3b0326e126cf07bf7": "d451a420b83a58d412b62bcdc980fe53",
".git/objects/a2/f9b280e60ec6ed4493d7f8e22ad006978baa7c": "ad4dd1193d0fe6ef5fe7458a6ea1995d",
".git/objects/bd/6d4c73fbd516a8458977f9e6a4a588f62320c7": "35d720a9e4418567eadbf0cc700c5667",
".git/objects/d1/e96e6a27b62516f810cc6ecbd77a64dd298a33": "c6cee1c798f353bff7807e31561f915c",
".git/objects/d6/09f82cd0cc1f4ec2c4ca12bbf37f9c664ac72e": "40445e883a4c066682cfd385bf2552f0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f45142a7f68d8767081426351d4a63efd046df": "40bce8572b02b87bc668c81313929ce2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/e56244a3467e5b0d39c1995e4c3408f21dafb9": "f3be783e7755fbf7b9dc39661aa24c16",
".git/objects/ec/56223dac66f128652fe624b3eede6856100426": "0766b609bc43bffd7d0b6833b6931fce",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/pack/pack-1771627756c15f46c021814c6227ab4d52951191.pack": "189671a0ffd7a6d46aa990862f1eca67",
".git/objects/pack/pack-1771627756c15f46c021814c6227ab4d52951191.idx": "988dfd982e2e747d2cec5e30eef88178",
".git/objects/7d/5fa8b23858a65b0f45e91116d297b7c859b1ce": "0c6c0ec477d6d81605b85e46ea4061e0",
".git/objects/42/81ba1cf8ff36ba1f7fc2b4e68840a8b57b786f": "390f7e06f33962759a5f20e4254d844f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7e/658d6b8ef5dd14caba4ac17d927efeb8bded3f": "5dfa219e3f97b8b12256a6322bcf5257",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/ad11715e8edcb000536e5df9b43d5a6f2a9273": "8854ba45c1a8aaae78ec3b9991482f0d",
".git/objects/09/a3d61c7398e053c8ba06cd3db88c479d65b4d8": "8b203cd33868cad877d9fc349ccc2a8e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/6c/7c3f0893c181ffb776221a322c13ea7354cd33": "d1bb1988958e3a26b7bb8fb2f4a0f785",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/86d98187ec4b201cb454d15fe7531ff316c764": "25558594002e0fb22f3e9c479dbd6ef6",
".git/objects/63/6829f2442339c15aaff9d0fdae0654c2d4667d": "7d20928a91e35650f0c3a202ade4562c",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/dc/4a8ba5f6ce10bd718565b16efb8fc38c245b71": "37e378199bcf183872422f87d69486b0",
".git/objects/de/9da4cb1c4291cfdafcbcc6620c6ccfc8047854": "7c9a269409c0654aaa7255873ea1b90d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/b9d484d04b338db7f84fa897d172d1e7202eef": "0e7a858a57080d6b7c03dce769fcdfc4",
".git/objects/e8/1c94557a361594ecdc5d89c7a2e0927149030e": "2c6e95d9c31637d6382738a6c0a224cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/c74a4b384a6a935154fecf64f0cfb808e8736a": "b757838a44f78b6190382d8b9de76727",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91d67d58cd88fa1492e3ad916d5201f0",
".git/logs/refs/heads/main": "91d67d58cd88fa1492e3ad916d5201f0",
".git/logs/refs/remotes/origin/main": "57f210b01f340d08af385575cab1b834",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4530b91e980abc5b7e42ae03ecb27e3c",
".git/refs/remotes/origin/main": "4530b91e980abc5b7e42ae03ecb27e3c",
".git/index": "3c4d8298e4e1c3a3f4e3cd764d1ba696",
".git/COMMIT_EDITMSG": "e83d70718f118249af212507ca3bf369",
".git/FETCH_HEAD": "8e3de38f15b16f4dee199ac58e55217c",
"assets/asset/image/sample_boy.png": "9dea15d51222a9934736c567f1058ccc",
"assets/asset/image/man-shape-mobile.svg": "b685e36aeca57d65b604025291c85592",
"assets/asset/image/man-shape.svg": "a3fa31386ff4b03043c0b7c2b053ab8a",
"assets/asset/image/chuu.jpeg": "108ba9a1b35bd8681ba982199cac6c34",
"assets/asset/font/SpoqaHanSansNeo-Thin.otf": "0e46d96cafdedeeb4b40598ee00f4e7c",
"assets/asset/font/SpoqaHanSansNeo-Light.otf": "9b97934b95a9237af599e2c4a99ad5cf",
"assets/asset/font/SpoqaHanSansNeo-Bold.otf": "8ea1d9004a8f295b800c3c9b89a9c07a",
"assets/asset/font/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/asset/font/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"assets/AssetManifest.json": "f7f07df8e7064b12e8fc8a6aa50c67d1",
"assets/NOTICES": "1ba87b5664ed7af1b29aa5519cba3ac1",
"assets/FontManifest.json": "96ff543d9dae4272142f6eae612f9963",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
