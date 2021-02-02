const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
   lintOnSave: false,
   publicPath: '.',
   chainWebpack: (config) => {
      // see https://github.com/vuejs/vue-cli/issues/5610
      config.module
         .rule('vue')
         .use('vue-loader')
         .loader(require.resolve('vue-loader-v16'))
         .tap((options) => {
            options.compilerOptions = {
               ...(options.compilerOptions || {}),
               isCustomElement: (tag) => { return /^a-/.test(tag); },
            };
            return options;
         });

      // Copy built .glb models
      config.plugin('copy')
         .tap((args) => {
            args[0].push({
               from: path.resolve(__dirname, '..', 'models', '**', '*.glb'),
               to: path.resolve(__dirname, 'dist', 'models', '[name].[ext]'),
            });
            return args;
         });
   },
   devServer: {
      https: true,
   },
};
