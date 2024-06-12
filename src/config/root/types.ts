export interface RootConfig<
  TTags extends string = string,
  TLayouts extends Record<string, string> = Record<string, string>,
> {
  /**
   * @description
   *
   * for using `<base_path>/[anything]` in `config.repoLayouts`
   *
   * @requires
   */
  basePath: string

  /**
   * @description
   *
   * an organize scope for every apps/packages/etc...,
   * optional may lead application that created not contain
   * an organize name.
   *
   * @default null
   */
  organize?: string | null

  /**
   * @description
   *
   * an monorepo layouts you want to specified
   *
   * @default {}
   */
  layouts?: TLayouts

  /**
   * @description
   *
   * tags info for which project includes which
   * @default undefined
   */
  tags?: TTags[]
}
