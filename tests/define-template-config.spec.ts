import { defineRootConfig } from "../src";
import { TemplateConfig, defineTemplateConfig } from "../src/config/template";

describe("test: `defineTemplateConfig` should pass", () => {
    const basicRootConfig = defineRootConfig({
        basePath: import.meta.dirname
    })

    it('expect: `template` throw error when not passing `runtime`', () => {
        const notPassConfig = () => defineTemplateConfig({
            rootBasePath: basicRootConfig.baseRootPath
        } as TemplateConfig)

        expect(notPassConfig).toThrow()
    })

    it('expect: `template` throw error when not passing `rootBasePath`', () => {
        const notPassConfig = () => defineTemplateConfig({
            runtime: 'node'
        } as TemplateConfig)

        expect(notPassConfig).toThrow()
    })
});
