import { GetDefineRootConfigLayout } from "../src/config/root";
import { default as _config } from "./mockRootConfig";

type ConfigLayout = GetDefineRootConfigLayout<typeof _config>;

describe("config should", () => {
  it("defineRootConfig returns Root Config", async () => {
    const config = await _config;
  });
});
