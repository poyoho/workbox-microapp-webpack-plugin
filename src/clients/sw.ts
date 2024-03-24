import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

interface ManifestItem {
  revision: string
  url: string
}

function mainAppManifest() {
  const manifest = (self as any).__WB_MANIFEST as ManifestItem[]

  const _manifest = manifest.map((item) => {
    const { revision, url } = item
    // html won't be served through cdn, stripe out publicPath
    if (url && /.html$/.test(url)) {
      const paths = url.split('/')
      return {
        revision,
        url: `/${paths[paths.length - 1]}`,
      }
    }
    return item
  })
  precacheAndRoute(_manifest)
}

function fetchSubAppLink(url: string) {
  return fetch(url).then(async (res) => {
    return res.json()
  }).then((res) => {
    return res
  })
}

export function bootstrapServiceWorker({
  subAppsPreCacheList = [],
}: {
  subAppsPreCacheList?: string[]
}) {
  clientsClaim()
  mainAppManifest()
  subAppsPreCacheList.forEach((url) => {
    fetchSubAppLink(url).then((res) => {
      precacheAndRoute(res)
    })
  })
}
