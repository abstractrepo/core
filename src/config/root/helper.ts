import { RootConfig } from "./types";

export default class RootHelper {
  constructor(public raw: RootConfig) {}

  /**
   * @description
   *
   * check is monorepo using organize
   */
  get isUseOrganize() {
    return typeof this.raw.organize === "string";
  }
}
