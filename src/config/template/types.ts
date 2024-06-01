export interface TemplateConfig {
  /**
   * @description
   *
   * for check when whatever template create to which folder that
   * define in `abstract.config.ts` layouts
   *
   * @requires
   */
  templateCanBeType: string[];

  /**
   * @description
   *
   * an tags for easily  filter in root monorepo
   *
   * @default []
   */
  templateCanBeTag?: string[];
}
