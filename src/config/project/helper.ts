import type { ProjectConfig } from './types'

export default class ProjectHelper {
  #raw: ProjectConfig

  constructor(config: ProjectConfig) {
    this.#raw = config

    return this
  }

  get getRawRuntime() {
    return this.#raw.runtime
  }

  get getRawTags() {
    return this.#raw.tags
  }
}
