import TemplateHelper from "./helper";
import { TemplateConfig } from "./types";

export default function defineTemplateConfig(templateConfig: TemplateConfig) {
  if (!templateConfig.runtime) {
    throw new ReferenceError(
      "E_CANNOT_FIND_RUNTIME: cannot find `runtime` in config"
    );
  }

  return new TemplateHelper(templateConfig);
}
