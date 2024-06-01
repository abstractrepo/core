export interface TagInfo {
  description: string;
  docs: string;
}

export interface RootConfig<
  TLayouts extends Record<string, string> = {},
  TTags extends Record<string, TagInfo> = {}
> {
  /**
   * @description
   *
   * for using `<base_path>/[anything]` in `config.repoLayouts`
   */
  basePath: string;

  /**
   * @description
   *
   * an organize scope for every apps/packages/etc...,
   * optional may lead application that created not contain
   * an organize name.
   *
   * @default undefined
   */
  organize?: string;

  /**
   * @description
   *
   * an monorepo layouts you want to specified
   *
   * @default {}
   */
  layouts?: TLayouts;

  /**
   * @description
   *
   * tags info for which project includes which
   * @default {}
   */
  tags?: TTags;
}
