let refreshing = false

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      const swUrl = '/sw.js'
      navigator.serviceWorker
        .register(swUrl)
        .catch((error) => {
          console.error('Error during service worker registration:', error)
        })

      // avoid reload on first time
      const oldSw = (await navigator.serviceWorker.getRegistration())?.active?.state
      navigator.serviceWorker.addEventListener('controllerchange', async () => {
        if (refreshing)
          return
        const newSw = (await navigator.serviceWorker.getRegistration())?.active?.state
        if (oldSw === 'activated' && newSw === 'activating') {
          // reload on controller change
          window.location.reload()
          refreshing = true
        }
      })
    })
  }
}

export function unregisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister()
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
