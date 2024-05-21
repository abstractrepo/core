import { FunctionsConfig, LazyImportConfig } from "../types";

export interface Config<
  TProjectLayout extends Record<string, FunctionsConfig<string>>
> {
  /** list of install project */
  projects: {
    id?: string | number;
    name: string;
    path: string;
    type: keyof TProjectLayout;
  }[];

  /** list of project creations */
  templates: LazyImportConfig<{
    id?: string | number;
    name: string;
    path: string;
    type: keyof TProjectLayout;
    entry: string;
    tags: string[];
  }>[];

  /** base command that you can creating yourself/from npm packages */
  commands: LazyImportConfig<unknown>[];

  /** for library from npm that make expand core monorepo */
  expansion: LazyImportConfig<unknown>[];

  layouts: TProjectLayout;
}

export type GetDefineRootConfigLayout<TConfig> = TConfig extends
  | Promise<Config<infer TLayout>>
  | Config<infer TLayout>
  ? TLayout
  : never;

export default async function defineRootConfig<
  TProjectLayout extends Record<string, FunctionsConfig<string>>
>(
  config:
    | Config<TProjectLayout>
    | (() => Config<TProjectLayout>)
    | (() => Promise<Config<TProjectLayout>>)
) {
  if (typeof config === "function") {
    const _config = await Promise.resolve(config());

    return _config;
  }

  return config;
}
