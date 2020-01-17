
module.exports = {
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3,
      targets: {
        browsers: ['last 2 versions', 'safari 7', '>5%']
      }
    }],
    ['@babel/preset-typescript', {
      allExtensions: true,
      isTSX: true
    }],
    '@babel/preset-react',
  ],
  plugins: [
    // [
    //   '@babel/plugin-proposal-class-properties',
    //   {
    //     loose: true
    //   }
    // ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-dynamic-import'
  ]
};