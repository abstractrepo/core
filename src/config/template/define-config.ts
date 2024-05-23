import { defineRootConfig, type RootConfig } from "../../index";
import { GlobalProgrammingType } from "../../global";
import { TemplateConfig } from "./types";

export default function defineTemplateConfig<
  TProgramming extends keyof GlobalProgrammingType,
  TRuntime extends GlobalProgrammingType[TProgramming],
  TPackageManager extends GlobalProgrammingType[TProgramming]
>(TemplateConfig: TemplateConfig<TProgramming, TRuntime, TPackageManager>) {
  return TemplateConfig;
}
