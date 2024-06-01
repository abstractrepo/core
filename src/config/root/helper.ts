import { RootConfig, TagInfo } from "./types";

export default class RootHelper<
  TLayouts extends Record<string, string>,
  TTags extends Record<string, TagInfo>
> {
  #raw: RootConfig<TLayouts>;

  constructor(raw: RootConfig<TLayouts, TTags>) {
    const config: RootConfig<TLayouts> = {
      basePath: raw.basePath,
      layouts:
        typeof raw.layouts !== "undefined"
          ? ({ ...raw.layouts } as TLayouts)
          : ({} as TLayouts),
      organize: undefined,
    };

    this.#raw = config;

    return this;
  }

  /**
   * @description
   *
   * check is monorepo using organize
   */
  get isUseOrganize() {
    return typeof this.#raw.organize === "string";
  }

  /**
   * @description
   *
   * get layouts object
   */
  get getLayoutObject() {
    return this.#raw.layouts;
  }

  /**
   * @description
   *
   * get monorepo organize
   */
  get getOrganizeName() {
    return this.#raw.organize;
  }

  /**
   * @description
   *
   * let you spcified layouts key that you define in root config
   */
  getLayouts<TLayoutsKey extends keyof TLayouts>(
    projectType: TLayoutsKey | TLayoutsKey[]
  ) {
    return typeof projectType === "string"
      ? [projectType as TLayoutsKey]
      : projectType;
  }

  /**
   * @description
   *
   * let you spcified tags key that you define in root config
   */
  getTags<TTagsKey extends keyof TTags>(projectTag: TTagsKey | TTagsKey[]) {
    return typeof projectTag === "string"
      ? [projectTag as TTagsKey]
      : projectTag;
  }

  /**
   * to get base path without using raw
   */
  get baseRootPath() {
    return this.#raw.basePath;
  }
}
