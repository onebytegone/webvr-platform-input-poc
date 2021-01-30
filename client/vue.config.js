module.exports = {
   lintOnSave: false,
   publicPath: '/',
   // see https://github.com/vuejs/vue-cli/issues/5610
   chainWebpack: (config) => {
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
   },
};
