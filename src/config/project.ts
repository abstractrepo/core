import { ProjectType } from ".";

interface Config {
  tags: string[];
  entry: "package.json" | (string & {});
  name: string;
  type: keyof ProjectType;
}

export default async function defineProjectConfig(
  config: Config | (() => Config) | (() => Promise<Config>)
) {
  if (typeof config === "function") {
    const _config = await Promise.resolve(config());

    return _config;
  }

  return config;
}

defineProjectConfig({
  tags: ["adonisjs", "react", "ssr", "inertia"],
  entry: "node ace",
  name: "playground-001",
  type: "project",
});
