import { clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

interface ManifestItem {
  revision: string
  url: string
}

function mainAppManifest(manifest: ManifestItem[] = []) {
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
  manifest,
  subAppsPreCacheList = [],
}: {
  manifest: ManifestItem[]
  subAppsPreCacheList?: string[]
}) {
  clientsClaim()
  console.log('[manifest]', manifest)
  mainAppManifest(manifest)
  subAppsPreCacheList.forEach((url) => {
    fetchSubAppLink(url).then((res) => {
      console.log('[sub app]', res)
      precacheAndRoute(res)
    })
  })
}
