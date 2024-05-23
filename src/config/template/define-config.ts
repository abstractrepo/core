import { defineRootConfig, type RootConfig } from "../../index";
import {
  type GlobalProgrammingType,
  type GlobalRuntimeType,
} from "../../global";
import { TemplateConfig } from "./types";

export default function defineTemplateConfig<
  TProgramming extends keyof GlobalProgrammingType,
  CatchRuntime extends GlobalProgrammingType[TProgramming],
  TRuntime extends CatchRuntime,
  TPackageManager extends GlobalRuntimeType[TRuntime]
>(
  base: RootConfig,
  $config:
    | ((
        base: RootConfig
      ) => TemplateConfig<TProgramming, TRuntime, TPackageManager>)
    | TemplateConfig<TProgramming, TRuntime, TPackageManager>
): TemplateConfig<TProgramming, TRuntime, TPackageManager> {
  const config = typeof $config === "function" ? $config(base) : $config;

  return {
    ...config,
    tags: Array.isArray(config.tags) ? [...config.tags] : [],
    commands: Array.isArray(config.commands) ? [...config.commands] : [],
    install: Array.isArray(config.install) ? [...config.install] : [],
  };
}

const root = defineRootConfig({
  basePath: import.meta.dirname,
});

const template = defineTemplateConfig(root, () => {
  return {
    tags: ["node", "vite", "react", "ts"],
    type: "project",
    programmingType: "javascript",
    runtimeType: "node",
  };
});
