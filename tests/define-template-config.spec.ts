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

  it("expect: `templateCanBeType` is required", () => {
    expect(() => {
      /** @ts-expect-error */
      return defineTemplateConfig({
        templateCanBeTag: root.getTags([]),
      });
    }).toThrowError();
  });

  it("expect: `templateCanBeTag` is empty array", () => {
    const template = defineTemplateConfig({
      templateCanBeType: root.getLayouts(["example"]),
    });

    expectTypeOf(template.getTemplateCanBeTag).toBeArray;
  });
});
