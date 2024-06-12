import type { GlobalRuntime } from '../../utils'

export interface TemplateConfig {

  /**
   * an array of `tag` that for project filter
   *
   * @default []
   */
  tags?: string[]

  /**
   * an array of `type` that for project filter
   *
   * @default []
   */
  types?: string[]

  /**
   * an list if sturcture to copy to project
   *
   * @default []
   */
  structures?: { from: string, to: string }[]

  /**
   * an runtime tell which runtime you currently in and abstract will check which runtime get which installer
   *
   * @requires
   */
  runtime: keyof GlobalRuntime

  /**
   * an root config `basepath`
   *
   * @requires
   */
  rootBasePath: string
}
