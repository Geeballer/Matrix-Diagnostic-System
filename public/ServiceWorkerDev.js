const ServiceWorkerDev = () => {
    let serviceWorkerURL = `${process.env.PUBLIC_URL}/ServiceWorker.js`
    navigator.serviceWorker.register(serviceWorkerURL).then((response) => {
        console.log('Response', response)
    })
}

export default ServiceWorkerDev