module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@views': './src/views',
        '@routes': './src/routes',
        '@database': './src/database',
        '@services': './src/services',
        '@api': './src/api'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
