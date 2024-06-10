import { withFallback } from "../../utils";
import { TemplateConfig } from "./types";

export default class TemplateHelper {
  #raw: Required<TemplateConfig>;

  constructor(templateConfig: TemplateConfig) {
    const config: Required<TemplateConfig> = {
      ...templateConfig,
      structures: withFallback(templateConfig.structures, []),
      tags: withFallback(templateConfig.tags, []),
      types: withFallback(templateConfig.types, [])
    };

    this.#raw = config;

    return this;
  }

  /**
   * sometime you want debug when it generate wrong files
   */
  get toRaw() {
    return this.#raw
  }
}
