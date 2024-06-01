import { withFallback } from "../../utils";
import { TemplateConfig } from "./types";

export default class TemplateHelper {
  #raw: TemplateConfig;

  constructor(templateConfig: TemplateConfig) {
    const config = {
      ...templateConfig,
      templateCanBeTag: withFallback(templateConfig.templateCanBeTag, []),
    } as TemplateConfig;

    this.#raw = config;

    return this;
  }

  /**
   * get template that group in project tags
   */
  get getTemplateCanBeTag() {
    return this.#raw.templateCanBeTag;
  }

  /**
   * get template that group in project types
   */
  get getTemplateCanBeType() {
    return this.#raw.templateCanBeType;
  }
}
