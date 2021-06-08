'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bc41313823739c821c6813c4f2154db3",
".git/config": "677c7a5fa9594782f328aaf9af5599e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dfa03e26b6cf78e63497cdac78de6969",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "674d8d7cec408189e395a80a4ae42a80",
".git/logs/refs/heads/master": "674d8d7cec408189e395a80a4ae42a80",
".git/logs/refs/remotes/origin/master": "e36c3d48c156e75f98764c393f263d85",
".git/objects/00/6381cfefe83cd95b16b0887a24ca5a202cc534": "27de5cc2d266ef222ec58cb18c7302d5",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/f9d98d036f7509c0635899c477fb89baef1b4b": "bb8738751d144c893d7f376f26b50cb8",
".git/objects/28/c24887045a401c302a40ed2a93a17cb6b40e9a": "2a474a1b0c6b581a951782ba1c774c1e",
".git/objects/2d/3edbc0f02c42b7dc08e313233dea43cba15443": "b6f1bd4a825f552399311b8a2039ae35",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/fc814429dfea04ad401a022f89a853623ee22d": "ce56fdc316c9b9b0cc4b317ee1373dea",
".git/objects/55/5149493dc836e676c39d0fd671ee50b76a5c0b": "edbd6a3714ce7da72650600f54e66610",
".git/objects/58/a4247a82fc416f38c451fd9b1b5599b722d332": "da029327c38ea85d9cc8d9b32facd923",
".git/objects/5d/ffb8a684c1e80706aba68e140da276b4df6760": "44c8dd6f77699f99a0042fd438724f12",
".git/objects/62/e55daae2a027e217dd76764b4bf32fe8d7ee5a": "f825a6ecf258b08959d1a1e142354501",
".git/objects/65/3ee61dc43e258555f841c9211214d57dfc5de5": "5eee809ee0c4c349a59f7e8f22234cfe",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/81/c9f22e45bb6079f0368c8e310a72a0b99bb5ce": "49cd0a4e7232ab9cd454c586f66a84ce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/082ef5b1a309e118ab5108c3f22a871ebf0caa": "84abaec2015f5542fbf7fb791b8ad2fc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f99e68bb433c90dd3f2e6dc488ad8c0f24ab95": "d2e6e466909b020cb54ce6f455080a11",
".git/objects/a4/ebebec77745be35acdf823a0ab91118b61b349": "18a1669f56d0d8aed0c4dcaed1e306f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/ba/80ecb6081df20cafaf5b38a14fd861a8cb2fbf": "75b46f2501c13c85b33fca1fc9385848",
".git/objects/c4/0c044be2b3b2c19a304419e66edeccfdbc580c": "e0ab40239d5c19b86bf8c8cbe9ef69fe",
".git/objects/cc/bd03ca0c2aec121f5a2e240478fed0d1406b29": "7e5a68193eacf5ae85d2a4c2087ed2f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/850f32ae804dcb659ef3d95abc17c019dee7aa": "9077487284085109960bb39f56b304e8",
".git/objects/f4/4118f9696903b9e2535a7b3bbea3d742eaf46d": "2d46460c353d6b6a1c97d29119aa6721",
".git/objects/f4/9858d2becdcb734585aaca41a17d6b5a5bc4dc": "ad8d1c04b1064f63afa0565f3ebe5b88",
".git/objects/fe/f16d3afb8aa874b63c8d3a12f686eeda16d87b": "ad45caf3ba93feabd382031d26df467a",
".git/refs/heads/master": "11f2406ab05b2d9d066b37fd60defc5f",
".git/refs/remotes/origin/master": "11f2406ab05b2d9d066b37fd60defc5f",
"assets/AssetManifest.json": "1f6d30a0a19c1475370588dfe03dde75",
"assets/FontManifest.json": "a3cd6d3714d3b0d9f19c158cf3fdd184",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/images/image-1.png": "9128f4a898f7771367feb50b6b1b9065",
"assets/images/image-2.png": "7bb1a10a0480f6d79dea8413ab8752a7",
"assets/images/image-3.png": "610a6e3dda398d24892a605aa68f987e",
"assets/images/image-4.png": "d688f5edb7b0fefb22203e0f9352db0c",
"assets/images/image-5.png": "e0b48ce88d0d7caadc61e50d8fe17d70",
"assets/images/image-6.png": "566cc696f59bc57dcc57512919c85538",
"assets/images/image-7.png": "7d1a569b1fa507f17f4d09b332962186",
"assets/images/image-8.png": "159e69d6686509246c809665dbe0b84a",
"assets/images/image-9.png": "aaaa61adbcb5334c94149079ebd34836",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1176cfd5a6aa5e0b2254172bc2009d2b",
"/": "1176cfd5a6aa5e0b2254172bc2009d2b",
"main.dart.js": "fff747f75fec26de4ee0801d42ce5b10",
"manifest.json": "e1e3e838fc64c31d056455ce4588ddd8",
"version.json": "4a099070e4ea6210e0a3812a12b67eff"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
