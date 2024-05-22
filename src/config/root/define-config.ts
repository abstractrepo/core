import { RootConfig } from "./types";

export default function defineRootConfig(config: RootConfig): RootConfig {
  if (!config.basePath) {
    throw new ReferenceError("E_CANNOT_FIND_BASE_PATH: cannot find basepath");
  }

  return {
    basePath: config.basePath,
    organize: config.organize ?? undefined,
  };
}
