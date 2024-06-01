import { defineRootConfig } from "../src";
import { defineTemplateConfig } from "../src/config/template";

describe("test: `defineTemplateConfig` should pass", () => {
  const root = defineRootConfig({
    basePath: import.meta.dirname,
    layouts: {
      playground: "<base>/playgrounds",
      example: "<base>/examples",
      project: "<base>/projects",
    },
  });

  it.todo("expect: `programmingType` is required", () => {
    const template = defineTemplateConfig({
      templateCanBeType: root.getLayouts(["playground", "project"]),
    });
  });
});
