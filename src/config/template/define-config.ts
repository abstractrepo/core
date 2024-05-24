import { GlobalProgrammingType } from "../../global";
import { TemplateConfig } from "./types";

export default function defineTemplateConfig<
  TProgramming extends keyof GlobalProgrammingType,
  TRuntime extends keyof GlobalProgrammingType[TProgramming],
  TPackageManager extends GlobalProgrammingType[TProgramming][TRuntime]
>(TemplateConfig: TemplateConfig<TProgramming, TRuntime, TPackageManager>) {
  return TemplateConfig;
}
