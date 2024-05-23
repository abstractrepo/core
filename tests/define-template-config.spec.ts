import { defineRootConfig } from "../src";
import { defineTemplateConfig } from "../src/config/template";

describe("test: `defineTemplateConfig` should pass", () => {
  const root = defineRootConfig({
    basePath: import.meta.dirname,
  });

  it.todo("expect: `programmingType` is required");
});
