//Set Cache Data for offline access 

let cacheData = 'MatrixApp'

this.addEventListener('Install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/'
            ])
        })
    )
})

//Get Cache Data for offline access

this.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            if(response){
                return response
            }
        })
    )
})