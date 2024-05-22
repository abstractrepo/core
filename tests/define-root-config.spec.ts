import { RootConfig, defineRootConfig } from "../src";

describe("test: `defineRootConfig` should all pass", async () => {
  it("expect: `root.basePath` is `required`", () => {
    expect(() => defineRootConfig({} as RootConfig)).toThrowError(
      "E_CANNOT_FIND_BASE_PATH: cannot find basepath"
    );
  });

  it("expect: `root.basePath` is type `string`", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expectTypeOf(root.basePath).toBeString();
  });

  it("expect: `root` has `organize` type `undefined` if not pass", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
    });

    expectTypeOf(root.organize).toBeUndefined;
  });

  it("expect: `root` has `organize` type `string` if pass", () => {
    const root = defineRootConfig({
      basePath: import.meta.dirname,
      organize: "abstract",
    });

    expectTypeOf(root.organize).toBeString;
  });
});
