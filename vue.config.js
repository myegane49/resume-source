module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_typography.scss";
          @import "@/assets/styles/_base.scss";
        `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [
        // {
        //   test: /\.scss$/,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     'postcss-loader',
        //     'sass-loader',
        //     {
        //       loader: 'sass-resources-loader',
        //       options: {
        //         // Provide path to the file with resources
        //         resources: './src/assets/styles/main.scss',
        //       },
        //     },
        //   ],
        // },
        // {
        //   test: /\.(ttf|otf|eot|woff|woff2)$/,
        //   use: {
        //     loader: "file-loader",
        //     options: {
        //       name: "fonts/[name].[ext]",
        //     },
        //   },
        // },
        // {
        //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        //   loader: 'url-loader',
        //   options: {
        //     limit: 10000,
        //     name: 'fonts/[name].[hash:7].[ext]'
        //   }
        // }
      ]
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("fonts")
  //     .test(/\.(ttf|otf|eot|woff|woff2)$/)
  //     .use("file-loader")
  //       .loader("file-loader")
  //       .tap(options => {
  //         options = {
  //           // limit: 10000,
  //           name: '/assets/fonts/[name].[ext]',
  //         }
  //         return options
  //       })
  //       .end()
  // }
  
};