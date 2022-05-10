'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9b15122be717cb3880564c4d0460830e",
"splash/style.css": "82f166bc1f89bb6b2289727b7b74de36",
"index.html": "367f34d911e808b31cd26d075418ffcb",
"/": "367f34d911e808b31cd26d075418ffcb",
"main.dart.js": "7e23ef6b5434eee88964a28c5b41842f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0f4a4a5ec56f7ea4cf915c61f67b882d",
"assets/config/app_config.json": "fc7bbef56c17a0c3f7cfcc000a6940cf",
"assets/AssetManifest.json": "da262c08eae1a8a7bfcf18d99b059160",
"assets/NOTICES": "bd4eb75f6ef006534c5b0360f5597797",
"assets/FontManifest.json": "ecbbc6b8638033d9fb947c9bff91fbfc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/logo.png": "b42f1bfc87de2e3b9fe96a7b0889137b",
"assets/assets/icons/svg/stroke/ios_right_svg.svg": "c0e722a58d55e5b1bcd77e4078461ab0",
"assets/assets/icons/svg/stroke/heart_svg.svg": "d2d25703c9075d489fc1f32b5a1298a3",
"assets/assets/icons/svg/stroke/credit_card_svg.svg": "ebbc339e0289616cc3087018b2af3bc8",
"assets/assets/icons/svg/stroke/close_circle_svg.svg": "b55fc486af818414609869b45a5266fc",
"assets/assets/icons/svg/stroke/grid_svg.svg": "da917697701180bdfd3f49d4dec29fe3",
"assets/assets/icons/svg/stroke/list_svg.svg": "3063da0f1dd54a0fab6af5a8e969e4e6",
"assets/assets/icons/svg/stroke/mobile_svg.svg": "63032554bf20db829ad80d0c2b0deae2",
"assets/assets/icons/svg/stroke/exit_app.svg": "d5433de7f908e685774442ab76cf4c18",
"assets/assets/icons/svg/stroke/close_svg.svg": "092e2ac2ab249df6364d1bc4685355cb",
"assets/assets/icons/svg/stroke/mail_svg.svg": "1534b4b14d536350e63994735e518450",
"assets/assets/icons/svg/stroke/share_svg.svg": "067811b8207ae260e56eed3e73141764",
"assets/assets/icons/svg/stroke/edit_svg.svg": "4c2bb8cf0e1196d943a33c61bd4619fe",
"assets/assets/icons/svg/stroke/search_svg.svg": "0e5d998a8e9a75a1a650c772e3450e74",
"assets/assets/icons/svg/stroke/more_hor_svg.svg": "9b79ca212c2970eb1d734e4fa068553e",
"assets/assets/icons/svg/stroke/bookmark_svg.svg": "209e4e7c99e1f46db6ffb8b0881c3081",
"assets/assets/icons/svg/stroke/bell_svg.svg": "f00991866f036711859b23e57a0eb3da",
"assets/assets/icons/svg/stroke/home_svg.svg": "51a9cd3897a40fac5b6cbc01116d6892",
"assets/assets/icons/svg/stroke/image_svg.svg": "9d5949c06ff3537247352ee93d0a6803",
"assets/assets/icons/svg/stroke/map_svg.svg": "dd32efdfb75a29a72427e2706fbc7f6a",
"assets/assets/icons/svg/stroke/plus_svg.svg": "78e37aeee40094e24ec9e104847f75a1",
"assets/assets/icons/svg/stroke/mic_svg.svg": "9c891f57b246294eba1fb27ca7b22a93",
"assets/assets/icons/svg/stroke/phone_svg.svg": "36d0062e98b6e8979a18d0992fc9916c",
"assets/assets/icons/svg/stroke/camera_svg.svg": "de740eb6a54c14d1eb50e7663ab9e146",
"assets/assets/icons/svg/stroke/bell_dot_w_svg.svg": "26db4de80556294e7d53c79b15ba8bbe",
"assets/assets/icons/svg/stroke/location_svg.svg": "9ba9fe36e333c6cc9f44dfc25f3f3b3a",
"assets/assets/icons/svg/stroke/history_svg.svg": "71cb65ecf19ddee51cab3150f8b0955d",
"assets/assets/icons/svg/stroke/arrow_down_drop_svg.svg": "7be9b67db99cc922404c5830151e15f9",
"assets/assets/icons/svg/stroke/settings_svg.svg": "cddaaec60fe5c34e4d9258d669a03f51",
"assets/assets/icons/svg/stroke/send_svg.svg": "9a471a12727b672ec360f508ff3c0716",
"assets/assets/icons/svg/stroke/comment_question_svg.svg": "fbe868075c0f255ae5888741cf2b09fd",
"assets/assets/icons/svg/stroke/calendar_svg.svg": "01946213829cc346540b982801976a79",
"assets/assets/icons/svg/stroke/check_true_svg.svg": "d6df614e56398da8e6763840dfa1bbc8",
"assets/assets/icons/svg/stroke/volume_svg.svg": "b8edfcde259f6cb55c7cf760c531785a",
"assets/assets/icons/svg/stroke/chrome_svg.svg": "bcd83716d8ea527a2660f8bc48f3ee7d",
"assets/assets/icons/svg/stroke/file_svg.svg": "4d1d9f349b67d9a6d30bf06892ac937b",
"assets/assets/icons/svg/stroke/message_svg.svg": "03490865031616037b5cc8966a005f28",
"assets/assets/icons/svg/stroke/lock_svg.svg": "6ebeb7867b0868b4f87fe98298ef8b8a",
"assets/assets/icons/svg/stroke/comment_svg.svg": "920410c469ca404cf978dae3adf5a2bb",
"assets/assets/icons/svg/stroke/navigation_svg.svg": "44524890fe2abd84374093023266b2fc",
"assets/assets/icons/svg/stroke/question_circle_svg.svg": "65d4f8612b89926fb92ef6e20b0ecc1a",
"assets/assets/icons/svg/stroke/remove_svg.svg": "76053efdda7457d3d1d72578cd4efe09",
"assets/assets/icons/svg/stroke/layers_svg.svg": "effd401476c189d7a9efb599c1c06da3",
"assets/assets/icons/svg/stroke/trash_svg.svg": "a043866dca8259059244a22a280508ba",
"assets/assets/icons/svg/stroke/enter.svg": "ceda8e8cb412ad12409ad301849d0370",
"assets/assets/icons/svg/stroke/ios_left_svg.svg": "796246437b1c0dba751791a4d5336c07",
"assets/assets/icons/svg/stroke/minus_svg.svg": "9053f78e7b597421f28d0d60164c9363",
"assets/assets/icons/svg/stroke/bell_dot_svg.svg": "af1ea2e464bbc16e91d09a188e12b03d",
"assets/assets/icons/svg/stroke/filter_svg.svg": "9d683f11903a2e07cc2d5456b358c35f",
"assets/assets/icons/svg/stroke/arrow_back_svg.svg": "77a0edb401ccfa68c4ce9ca98bd04ca2",
"assets/assets/icons/svg/stroke/map_pin_svg.svg": "1c50c20d3735159933ad16fbcb254e6d",
"assets/assets/icons/svg/stroke/user_svg.svg": "d4e969e7c48875d1240a3d98ac0e7681",
"assets/assets/icons/svg/stroke/video_svg.svg": "1489f3077dfc9442b5a67a85f1268138",
"assets/assets/icons/svg/stroke/people_svg.svg": "c9e1add3f4ff5458e45c6886edea0c65",
"assets/assets/icons/svg/solid/heart_svg.svg": "bcf4fcd4bb7f5f825b025aa4a00e6712",
"assets/assets/icons/svg/solid/chat_dot_svg.svg": "dcee01bcf883da3d246c1f5af7e874e8",
"assets/assets/icons/svg/solid/picture_svg.svg": "520458dd3013d517cdf2d2e3b6078eef",
"assets/assets/icons/svg/solid/play_svg.svg": "00417abca9a2797f5169ece9abddf8e4",
"assets/assets/icons/svg/solid/bookmark_svg.svg": "ba488182d1feca5fcc7fad7f28502b74",
"assets/assets/icons/svg/solid/home_svg.svg": "737e23d501c96fafd0c4c61d5dfbfc02",
"assets/assets/icons/svg/solid/phone_svg.svg": "47fc325e4bc0eb5767431c77bda33a72",
"assets/assets/icons/svg/solid/chat_svg.svg": "89518552efc4ed90041602e6798670f3",
"assets/assets/icons/svg/solid/location_svg.svg": "64dcefe29a386b7d5e6d83cf151902cb",
"assets/assets/icons/svg/solid/star_svg.svg": "f343910ea948c0903f0d440b1ca2c0e4",
"assets/assets/icons/svg/solid/calendar_svg.svg": "ee199fc22fff75419ab6d956bf2682aa",
"assets/assets/icons/svg/solid/user_svg.svg": "51d0100707dadfd3c3a85c94573a3c52",
"assets/assets/icons/svg/map_pin_w_svg.svg": "196e371e43c76851b9d60ee5c43843f9",
"assets/assets/icons/svg/map_user_svg.svg": "83f01dbf7ccbb010056a4a0097849cc3",
"assets/assets/icons/svg/map_pin_svg.svg": "812b241a38bc4acf88435d46a79155fa",
"assets/assets/icons/png/flag/belarus_flag_png.png": "8e058eae0cd3a9fb49949b09da17d04e",
"assets/assets/icons/png/flag/russia_flag_png.png": "bb82bb216b46888b29f5f1bff7845297",
"assets/assets/icons/png/flag/uzbekistan_flag_png.png": "9f48f57e7d1e164beac44afc4aeeeb24",
"assets/assets/icons/png/flag/ukraine_flag_png.png": "60e319d0b06596855da3c5264eabdf46",
"assets/assets/icons/png/flag/kazakhstan_flag_png.png": "b04a4ae85283287b249b9954ec8e5a7a",
"assets/assets/icons/png/payment/chip_png.png": "d6562b64c810a4deaf6fdbbc2c8101d3",
"assets/assets/icons/png/payment/visa_light_png.png": "4a1c1d3f4ab740d458dde11a6315e81e",
"assets/assets/icons/png/payment/master_card_png.png": "01c4b571829da664c183d2f2a69dc52a",
"assets/assets/icons/png/payment/visa_dark_png.png": "db2ccc488994fd34bb0fbbfea612877d",
"assets/assets/icons/png/payment/paypal_light_png.png": "e41b110f0aecc467cfe5fb8b3f2fae8f",
"assets/assets/icons/png/payment/paypal_dark_png.png": "664658301e02d6ae0c59447f750be333",
"assets/assets/icons/png/social/messenger_png.png": "8c71df3c1f3b8a0d96d6aa7d912667f3",
"assets/assets/icons/png/social/pinterest_png.png": "219538f7e435873a06c602c9076723c7",
"assets/assets/icons/png/social/instagram_png.png": "630c0471efe28116688184d7f7cd62b2",
"assets/assets/icons/png/social/google_png.png": "cbc6356533249c31b95252d078cb91bb",
"assets/assets/icons/png/social/facebook_png.png": "b67582de5263ae5a2f9c4f5ebb44d82a",
"assets/assets/icons/png/social/twitter_png.png": "b288994f1a420736d94ae41eded4b6c6",
"assets/assets/icons/png/calendar_plus.png": "dc6a302b8d7efc8e0f5fb520db8791db",
"assets/assets/icons/png/calendar.png": "e643eb2914682748f35aaee093197212",
"assets/assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/logo.svg": "f0e10a9a0d76f9acec3d4dea96d44b9d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
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
