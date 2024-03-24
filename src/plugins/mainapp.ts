import { InjectManifest } from './workbox-webpack-plugin'

type InjectManifestProps = InjectManifest['config']

export interface WorkboxMicroMainAppPluginProps extends InjectManifestProps {

}

export class WorkboxMicroMainAppPlugin extends InjectManifest {
  constructor(config: WorkboxMicroMainAppPluginProps) {
    super(config)
  }
}
