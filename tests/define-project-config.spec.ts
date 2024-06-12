import type { ProjectConfig } from '../src'
import { defineProjectConfig } from '../src'

describe('test: `defineProjectConfig` should all pass', () => {
  it('expect: `defineProjectConfig` to throws when `runtime` not pass', () => {
    const notPassConfig = () => defineProjectConfig(({
      tags: [],
    } as unknown as ProjectConfig))

    expect(notPassConfig).toThrow()
  })

  it('expect: `defineProjectConfig` to throws when `tags` not pass', () => {
    const notPassConfig = () => defineProjectConfig(({
      runtime: 'node',
    } as unknown as ProjectConfig))

    expect(notPassConfig).toThrow()
  })
})
