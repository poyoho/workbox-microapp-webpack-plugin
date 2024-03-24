import { bootstrapServiceWorker } from "workbox-microapp-webpack-plugin/client";

const manifest = self.__WB_MANIFEST

bootstrapServiceWorker({
  manifest,
  subAppsPreCacheList: [
    'http://localhost:8091/sw-precache.json'
  ]
})