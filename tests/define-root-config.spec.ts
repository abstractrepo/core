import { defineRootConfig } from "../src";

const root = defineRootConfig({
  basePath: import.meta.dirname,

  organize: "abstract",
});

describe("test: `defineRootConfig` should all pass", async () => {
  it("expect: root has basePath key", async () => {
    expect("basePath" in root).toBe(true);
  });

  it("expect: `root.basePath` equal `import.meta.dirname`", async () => {
    expect(root.basePath).toBe(import.meta.dirname);
  });

  it("expect: root has organize key", async () => {
    expect("organize" in root).toBe(true);
  });

  it("expect: `root.organize` type string", async () => {
    expectTypeOf<string | undefined>(root.organize).toBeString();
  });
});
