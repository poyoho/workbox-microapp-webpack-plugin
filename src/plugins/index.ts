import { InjectManifest } from 'workbox-webpack-plugin'

type InjectManifestProps = InjectManifest['config']

interface WorkboxMicroAppPluginProps extends InjectManifestProps {

}

export default class WorkboxMicroAppPlugin extends InjectManifest {
  constructor(config: WorkboxMicroAppPluginProps) {
    super(config)
  }
}
