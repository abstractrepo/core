import { defineRootConfig } from "../src";
import { TemplateConfig, defineTemplateConfig } from "../src/config/template";

describe.todo("test: `defineTemplateConfig` should pass", () => {
  const basicRootConfig = defineRootConfig({
    basePath: import.meta.dirname
  })

  it('expect: `template` config throw error when not passing `runtime`', () => {
    const notPassConfig = () => defineTemplateConfig({
      rootBasePath: basicRootConfig.baseRootPath
    } as TemplateConfig)

    expect(notPassConfig).toThrow()
  })

  it('expect: `template` config throw error when not passing `rootBasePath`', () => {
    const notPassConfig = () => defineTemplateConfig({
      runtime: 'node'
    } as TemplateConfig)

    expect(notPassConfig).toThrow()
  })

  it('expect: `template` config fallback `structures`', () => {
    const config = defineTemplateConfig({
      rootBasePath: basicRootConfig.baseRootPath,
      runtime: 'node'
    })

    expect(config.toRaw.structures).toStrictEqual([])
  })

  it('expect: `template` config fallback `tags`', () => {
    const config = defineTemplateConfig({
      rootBasePath: basicRootConfig.baseRootPath,
      runtime: 'node'
    })

    expect(config.toRaw.tags).toStrictEqual([])
  })

  it('expect: `template` config fallback `types`', () => {
    const config = defineTemplateConfig({
      rootBasePath: basicRootConfig.baseRootPath,
      runtime: 'node'
    })

    expect(config.toRaw.types).toStrictEqual([])
  })
});
