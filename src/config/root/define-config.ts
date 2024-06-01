import RootHelper from "./helper";
import { RootConfig, TagInfo } from "./types";

export default function defineRootConfig<
  TLayouts extends Record<string, string> = {},
  TTags extends Record<string, TagInfo> = {}
>(config: RootConfig<TLayouts, TTags>) {
  if (!config.basePath) {
    throw new ReferenceError("E_CANNOT_FIND_BASE_PATH: cannot find basepath");
  }

  return new RootHelper(config);
}
