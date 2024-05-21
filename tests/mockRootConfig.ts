import { defineRootConfig } from "../src";

export default defineRootConfig({
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
});
