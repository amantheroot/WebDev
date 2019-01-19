if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('sw_cached_site.js')
			.then(res => console.log('Service Worker: Registered'))
			.catch(err => console.log(`Service Worker: ${err}`))
	});
}