export interface RootConfig {
  /**
   * @description
   *
   * for using `<base_path>/[anything]` in `config.repoLayouts`
   *
   * @default import.meta.dirname
   */
  basePath?: string;

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
}
