import { toArray, withFallback } from "../../utils";
import { RootConfig } from "./types";

export default class RootHelper<
  TTags extends string = string,
  TLayouts extends Record<string, string> = {},
> {
  #raw: Required<RootConfig<TTags, TLayouts>>;

  constructor(raw: RootConfig<TTags, TLayouts>) {
    const config: Required<RootConfig<TTags, TLayouts>> = {
      basePath: raw.basePath,
      layouts: withFallback(raw.layouts, {} as TLayouts),
      organize: withFallback(raw.organize, null),
      tags: withFallback(raw.tags, []),
    };

    this.#raw = config as Required<RootConfig<TTags, TLayouts>>;

    return this;
  }

  /**
   * sometimes you want to get `basePath` from RootConfig.
   */
  get getRawBaseRootPath() {
    return this.#raw.basePath;
  }

  /**
   * sometimes you want to get `layouts` from RootConfig.
   */
  get getRawLayouts() {
    return this.#raw.layouts;
  }

  /**
   * sometimes you want to get `organize` from RootConfig.
   */
  get getRawOrganize() {
    return this.#raw.organize;
  }

  /**
   * sometimes you want to get `tags` from RootConfig.
   */
  get getRawTags() {
    return this.#raw.tags;
  }

  /**
   * an method to get which `layouts` key should in path
   */
  getLayoutKeyPath<TLayoutKey extends keyof TLayouts>(
    key: TLayoutKey,
  ) {
    const $key = this.#raw.layouts[key];

    if ($key.startsWith("<base>/")) {
      return $key.replace(/^\<base\>/s, this.#raw.basePath);
    }

    if ($key.startsWith("<base_path>/")) {
      return $key.replace(/^\<base_path\>/s, this.#raw.basePath);
    }

    if ($key.startsWith("./")) {
      return $key.replace(/^\./s, this.#raw.basePath);
    }

    return $key;
  }

  /**
   * an method to get what key contain in `layouts`
   */
  getLayoutsList<TLayoutKey extends keyof TLayouts>(
    layouts: TLayoutKey | TLayoutKey[]
  ) {
    return toArray(layouts);
  }

  /**
   * an method to get what contain in `tags`
   */
  getTagsList<TTagKey extends TTags>(tags: TTagKey | TTagKey[]) {
    return toArray(tags);
  }
}
