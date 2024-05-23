import RootHelper from "./helper";
import { RootConfig } from "./types";

export default function defineRootConfig(config: RootConfig) {
  if (!config.basePath) {
    throw new ReferenceError("E_CANNOT_FIND_BASE_PATH: cannot find basepath");
  }

  return new RootHelper(config);
}
