import { defineProjectConfig } from "../src";
import { GetDefineRootConfigLayout } from "../src/config/root";
import { default as _config } from "./mockRootConfig";

type ConfigLayout = GetDefineRootConfigLayout<typeof _config>;

export default defineProjectConfig<ConfigLayout>({
  entry: "package.json",
  name: "next-app",
  tags: ["next", "ssr", "react"],
  type: "project",
});
