import type { RootConfig } from '../src'
import { defineRootConfig } from '../src'

describe('test: `defineRootConfig` should all pass', async () => {
  it('expect: `rootConfig` has exact `basePath` required all project', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
    })

    expect(config.getRawBaseRootPath).toBe(import.meta.dirname)
  })

  it('expect: `rootConfig` if not pass `basePath` will throw error', () => {
    const notPassConfig = () => defineRootConfig({} as RootConfig)

    expect(notPassConfig).throw()
  })

  it('expect: `rootConfig` if not pass `layouts` it will fallback to `{}`', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
    })

    expect(config.getRawLayouts).toStrictEqual({})
  })

  it('expect: `rootConfig` can get `layouts` config path', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
      layouts: {
        apps: '<base>/project',
        example: '<base_path>/example',
        cases: './study_cases',
      },
    })

    expect(config.getLayoutKeyPath('apps')).toBe(
      `${import.meta.dirname}/project`,
    )
    expect(config.getLayoutKeyPath('example')).toBe(
      `${import.meta.dirname}/example`,
    )
    expect(config.getLayoutKeyPath('cases')).toBe(
      `${import.meta.dirname}/study_cases`,
    )
  })

  it('expect: `rootConfig` if not pass `organize` it will fallback to `null`', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
    })

    expect(config.getRawOrganize).toBe(null)
  })

  it('expect: `rootConfig` can get the `organize` value that pass into and returns its value', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
      organize: 'ignition-concept',
    })

    expect(config.getRawOrganize).toStrictEqual('ignition-concept')
  })

  it('expect: `rootConfig` if not pass `tags` will fallback to `[]`', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
    })

    expect(config.getRawTags).toStrictEqual([])
  })

  it('expect: `rootConfig` can get config key if `tags` is pass can get some of that value', () => {
    const config = defineRootConfig({
      basePath: import.meta.dirname,
      tags: [
        'react',
        'vite',
        'inertia',
        'vue',
        'js',
        'ts',
        'laravel',
        'php',
        'node',
        'next',
        'remix',
        'astro',
      ],
    })

    expect(config.getTagsList(['js', 'next', 'react', 'node'])).toStrictEqual([
      'js',
      'next',
      'react',
      'node',
    ])
  })
})
