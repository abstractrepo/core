import type { GlobalRuntime } from '../../utils'

export interface ProjectConfig {
  /**
   * list of tags that inject by `template`
   */
  tags: string[]

  /**
   * an runtime for using in this project by selected plugins
   */
  runtime: keyof GlobalRuntime
}
