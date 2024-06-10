import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  files:["./src/**/*.ts","./src/**/*.js"]
},{
  rules:{
    'unicorn/filename-case':['error', {
        case:'kebabCase',
        cases: {
          pascalCase:true,
          kebabCase:true
        },
      }
    ]
  }
})
