'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "717ddc44fa92378868c9c88aa70d58b3",
"assets/AssetManifest.bin.json": "08682c10a5491f0e7854bd89b546e414",
"assets/assets/cv/cv.pdf.pdf": "7224c3afdba7264f6f998abe5c993186",
"assets/assets/images/developer.png": "a44392529dfca5f2bfbf6ec19b7734b4",
"assets/assets/images/logo.png": "4c2ec3585647bb095b8248eb3b293c33",
"assets/assets/inote/WhatsApp%2520Image%25202026-03-10%2520at%25209.41.18%2520PM.jpeg": "ec78b05f31dfa1fce183cc55bc66eb1a",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.23%2520PM%2520(1).jpeg": "e0bdcd586b444748df827e5e03615e81",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.23%2520PM%2520(2).jpeg": "c415f13e2577da0921fe2211f3e428e8",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.23%2520PM.jpeg": "7bce0951641cd5d68b06f154a9b3f49f",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.24%2520PM%2520(1).jpeg": "fcf59f3d503161356e7b9e4e30e7d8ea",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.24%2520PM%2520(2).jpeg": "a8a7e65100a2875bfac3da1e71ec2ffb",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.24%2520PM%2520(3).jpeg": "012f1b1afe70ea99bdbc23b53d55ddf0",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.24%2520PM.jpeg": "47c98425dac838cc6162ae9e0fc6882c",
"assets/assets/inote/WhatsApp%2520Image%25202026-04-18%2520at%25209.47.25%2520PM.jpeg": "a789dcee4024e718a7b9334b843354fb",
"assets/assets/mymetro/my%2520metro.png": "eec6a4f3117a3883aa44f1cf219e35c2",
"assets/assets/mymetro/WhatsApp%2520Image%25202026-03-10%2520at%25209.29.35%2520PM.jpeg": "d41122a1ba323fc260bd203d61e8c1e2",
"assets/assets/mymetro/WhatsApp%2520Image%25202026-03-10%2520at%25209.29.36%2520PM%2520(1).jpeg": "50c8bc526bec8f88259a1c8b55783ae5",
"assets/assets/mymetro/WhatsApp%2520Image%25202026-03-10%2520at%25209.29.36%2520PM%2520(2).jpeg": "03d1b5af2896df762887336e013c4768",
"assets/assets/mymetro/WhatsApp%2520Image%25202026-03-10%2520at%25209.29.36%2520PM.jpeg": "9712ab3c0f79c6c5fb199e6a3a416eea",
"assets/assets/Oasis/a_minimalist_luxury_logo_for_a_premium_e_commerce_app_named_oasis._the_design_should_feature_a_stylized_elegant_leaf_or_palm_branch_integrated_with_a_sophisticated_o_shape._use_sage_green_87a96b_and_charcoal_colo.png": "69724b758c655c2e8f7b83792a293d53",
"assets/assets/Oasis/oasis%2520logo.png": "2d40646ec7f91f4775c2ca89b2413153",
"assets/assets/Oasis/oasis.png": "5e74cf8f5ca4c3952b936d226f03992d",
"assets/assets/Oasis/Screenshot%25202026-04-14%2520134603.png": "8fa0a0dd9a1e78e0963a8baa04204eec",
"assets/assets/Oasis/Screenshot%25202026-04-14%2520134811.png": "3c9f703efb900e6c4d55830e3fb2e55d",
"assets/assets/Oasis/Screenshot%25202026-04-14%2520134848.png": "d44e5a3074b7d2c99b40c6136a88801d",
"assets/assets/Oasis/Screenshot%25202026-04-14%2520211932.png": "c6c4a94f92915ab52002a7f64e761966",
"assets/assets/Oasis/WhatsApp%2520Image%25202026-04-18%2520at%25209.21.07%2520PM%2520(1).jpeg": "3e49004e5bf2824f12273d7e1891a0a7",
"assets/assets/Oasis/WhatsApp%2520Image%25202026-04-18%2520at%25209.21.07%2520PM%2520(2).jpeg": "ead9ea1571f3ceb2325381d8028c861a",
"assets/assets/Oasis/WhatsApp%2520Image%25202026-04-18%2520at%25209.21.07%2520PM.jpeg": "e16d2b352c0bd13901c1fba90ee3c63c",
"assets/assets/tafwyla/home.png": "ad678bdb6108d4f4c8443dd25d435a22",
"assets/assets/tafwyla/screens.png": "9f3c12578f227217270c736dba08d299",
"assets/assets/tafwyla/taf.png": "6a2b2a9b405a2155e0999abb0e988fa8",
"assets/assets/targmly/WhatsApp%2520Image%25202026-04-18%2520at%25209.31.52%2520PM.jpeg": "640b0431c0a923c8c53022650c05436f",
"assets/assets/targmly/WhatsApp%2520Image%25202026-04-18%2520at%25209.31.54%2520PM%2520(1).jpeg": "3111d15be71fb2318022be9151895b64",
"assets/assets/targmly/WhatsApp%2520Image%25202026-04-18%2520at%25209.31.54%2520PM%2520(2).jpeg": "1bbee7e721e2d25e0777596f99d8bd3b",
"assets/assets/targmly/WhatsApp%2520Image%25202026-04-18%2520at%25209.31.54%2520PM%2520(3).jpeg": "8a93c3ef127c1ed724b4ace5cf017139",
"assets/assets/targmly/WhatsApp%2520Image%25202026-04-18%2520at%25209.31.54%2520PM.jpeg": "baa1df44967796c38c905ebf3cae6acd",
"assets/FontManifest.json": "2a3f09429db12146b660976774660777",
"assets/fonts/MaterialIcons-Regular.otf": "f6432adfd15c6aea66f7ab838b01fb76",
"assets/NOTICES": "19d2581779fcfdead35cebd0e010c47c",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "b7a225eb557dd600e4834771a6b0d16a",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "db81eee94d57986694fdcda4534ca50e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "f7af3f7596a98334f1c51242b9e9b3fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"cv.pdf": "7224c3afdba7264f6f998abe5c993186",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "423e1e328b2641af92e841b6ac1f1c1f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8a94a23cf604f5a225ab32d4302ea926",
"/": "8a94a23cf604f5a225ab32d4302ea926",
"main.dart.js": "07aadbbfb1d4dc3e84c20c7f309047f6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
