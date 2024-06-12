import TemplateHelper from './helper'
import type { TemplateConfig } from './types'

export default function defineTemplateConfig(templateConfig: TemplateConfig) {
  if (!templateConfig.runtime) {
    throw new ReferenceError(
      'E_CANNOT_FIND_RUNTIME: cannot find `runtime` in config',
    )
  }

  if (!templateConfig.rootBasePath) {
    throw new ReferenceError(
      'E_CANNOT_FIND_ROOT_BASE_PATH: cannot find `rootBasePath` in config',
    )
  }

  return new TemplateHelper(templateConfig)
}
