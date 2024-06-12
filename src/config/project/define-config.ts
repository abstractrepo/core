import ProjectHelper from './helper'
import type { ProjectConfig } from './types'

export default function defineProjectConfig(config: ProjectConfig) {
  return new ProjectHelper(config)
}
