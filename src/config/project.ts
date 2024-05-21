export interface Config<TProjectLayout extends Record<string, string>> {
  tags: string[];
  entry: "package.json" | (string & {});
  name: string;
  type: keyof TProjectLayout;
}

export default async function defineProjectConfig<
  TProjectLayout extends Record<string, string>
>(
  config:
    | Config<TProjectLayout>
    | (() => Config<TProjectLayout>)
    | (() => Promise<Config<TProjectLayout>>)
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
