export interface TemplateConfigCommand {
  name: string;
  bash: string;
}

export interface TemplateConfigInstallationPackage {
  package: string;
  version: string;
  type: "dependencies" | "devDependencies";
}

export interface TemplateConfig {
  /**
   * @description
   *
   * for check when whatever template create to which folder that
   * define in `abstract.config.ts` layouts
   *
   * @requires
   */
  templateCanBeType: string | string[];

  /**
   * @description
   *
   * an tags for easily  filter in root monorepo
   *
   * @default []
   */
  tags?: string[];

  /**
   * @description
   *
   * an location that let you put package that need install during installation
   *
   * @default []
   */
  install?: TemplateConfigInstallationPackage[];
}
