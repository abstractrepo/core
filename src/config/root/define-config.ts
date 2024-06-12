import RootHelper from './helper'
import type { RootConfig } from './types'

export default function defineRootConfig<
  TTags extends string = string,
  TLayouts extends Record<string, string> = Record<string, string>,
>(config: RootConfig<TTags, TLayouts>) {
  if (!config.basePath) {
    throw new ReferenceError('E_CANNOT_FIND_BASE_PATH: cannot find basepath')
  }

  return new RootHelper(config)
}
