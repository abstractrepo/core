import { RootConfig, defineRootConfig } from "../src";

describe("test: `defineRootConfig` should all pass", async () => {
  it("expect: `root.baseRootPath` is `required`", () => {
    expect(() => defineRootConfig({} as RootConfig)).toThrowError(
      "E_CANNOT_FIND_BASE_PATH: cannot find basepath"
    );
  });

  it("expect: `root.baseRootPath` is type `string`", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expectTypeOf(root.baseRootPath).toBeString();
  });

  it("expect: `root.baseRootPath` is equal `import.meta.dirname`", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expect(root.baseRootPath).toBe(import.meta.dirname);
  });

  it("expect: `root` has `getOrganizeName` type `undefined` if not pass", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expectTypeOf(root.getOrganizeName).toBeUndefined;
  });

  it("expect: `root` has `getOrganizeName` type `string` if pass", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
      organize: "abstract",
    });

    expectTypeOf(root.getOrganizeName).toBeString;
  });

  it("expect: `root` has `layouts` property", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expectTypeOf(root.getLayoutObject).toBeObject;
  });
});
