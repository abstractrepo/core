export interface GlobalJavascriptRuntimePackageManagerType {
  node: "pnpm" | "npm" | "yarn";
  bun: "bun";
}

export interface GlobalPHPRuntimePackageManagerType {
  php: "composer";
}
