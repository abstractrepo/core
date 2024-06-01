import TemplateHelper from "./helper";
import { TemplateConfig } from "./types";

export default function defineTemplateConfig(templateConfig: TemplateConfig) {
  if (!templateConfig.templateCanBeType) {
    throw new ReferenceError(
      "E_CANNOT_FIND_TEMPLATE_CAN_BE_TYPE: cannot find `templateCanBeType` in config"
    );
  }

  return new TemplateHelper(templateConfig);
}
