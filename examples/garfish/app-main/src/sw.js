import { clientsClaim } from 'workbox-core';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';

function mainAppManifest() {
  const manifest = self.__WB_MANIFEST;
  
  const _manifest = manifest.map((item) => {
    const { revision, url } = item;
    // html won't be served through cdn, stripe out publicPath
    if (url && /.html$/.test(url)) {
      const paths = url.split('/');
      return {
        revision,
        url: `/${paths[paths.length - 1]}`,
      };
    }
    return item;
  });
  precacheAndRoute(_manifest);
}

function fetchSubAppLink(url) {
  return fetch(url).then(async (res) => {
    return res.json()
  }).then(res => {
    console.log(res);
    return res
  })
}

function bootstrap() {
  clientsClaim();
  mainAppManifest();
  ['http://localhost:8091/sw-precache.json'].forEach((url) => {
    fetchSubAppLink(url).then(res => {
      precacheAndRoute(res);
    })
  })
}

bootstrap()