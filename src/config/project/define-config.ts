import ProjectHelper from './helper'
import type { ProjectConfig } from './types'

export default function defineProjectConfig(config: ProjectConfig) {
  if (!config.runtime) {
    throw new ReferenceError('E_CANNOT_FIND_RUNTIME: cannot find runtime')
  }

  if (!config.tags) {
    throw new ReferenceError('E_CANNOT_FIND_TAGS: cannot find tags')
  }

  return new ProjectHelper(config)
}
