import { bootstrapServiceWorker } from "workbox-microapp-webpack-plugin/client";

bootstrapServiceWorker([
  'http://localhost:8091/sw-precache.json'
])