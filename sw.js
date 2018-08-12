let cacheName = 'static-v5'; //set version for cache

const urlsToCache = [ //add files in array to cash 
    '/index.html',
	'/restaurant.html',
	'data/restaurants.json',
	'css/styles.css',
	'js/dbhelper.js',
	'js/main.js',
	'js/restaurant_info.js',	
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg'
	];

self.addEventListener('install', function(event) { //Install service worker and cache files
  event.waitUntil(caches.open(cacheName).then(function(cache) {
      return cache.addAll(urlsToCache);
    }).catch(function(error){ //we have error
    	console.log('Inastall error');
    })
  );
});

self.addEventListener('fetch', function(event) { //"fetch" cached files, fall back on the network
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	}).catch(function(error) { //we have error
		console.log('There is error', error);
	}));
});