import defineRootConfig from "../src/config/root";
import { default as _config } from "./mockRootConfig";

describe("config should", () => {
  it("defineRootConfig returns Root Config", async () => {
    const config = await _config;

    expect(
      await defineRootConfig({
        projects: [
          {
            name: "playground-001",
            path: "<base_path>/playgrounds",
            type: "playground",
          },
        ],

        commands: [],

        expansion: [],

        templates: [],

        layouts: {
          project: "<base_path>/project",
          playground: "<base_path>/playground",
        },
      })
    ).toStrictEqual(config);
  });
});
