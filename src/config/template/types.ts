import { GlobalProgrammingType } from "../../global";

export interface TemplateConfigCommand {
  name: string;
  bash: string;
}

export interface TemplateConfigInstallationPackage {
  package: string;
  version: string;
  type: "dependencies" | "devDependencies";
}

export interface TemplateConfig<
  TProgramming extends keyof GlobalProgrammingType,
  TRuntime extends keyof GlobalProgrammingType[TProgramming],
  TPackageManager extends GlobalProgrammingType[TProgramming][TRuntime]
> {
  /**
   * @description
   *
   * for check when whatever template create to which folder that
   * define in `abstract.config.ts` layouts
   *
   * @requires
   */
  projectType: string | string[];

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
   * list of command to add in init file
   *
   * @default []
   */
  commands?: TemplateConfigCommand[];

  /**
   * @description
   *
   * check which programming type for using which runtime
   *
   * @requires
   */
  programmingType: TProgramming;

  /**
   * @description
   *
   * check which runtime type for using which package manager
   *
   * @requires
   */
  runtimeType: TRuntime;

  /**
   * @description
   *
   * check which package manager type for using during installation
   *
   * @requires
   */
  packageManagerType: TPackageManager;

  /**
   * @description
   *
   * an location that let you put package that need install during installation
   *
   * @default []
   */
  install?: TemplateConfigInstallationPackage[];
}
