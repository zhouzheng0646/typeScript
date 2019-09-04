// 安装 npm install -g typescript
// 安装 npm install --save react react-dom @types/react @types/react-dom

// 安装 webpack
// npm install -g webpack 下载到全局
// npm install --save-dev webpack 添加到当前项目
// npm install -g webpack-cli 下载到全局
// npm install --save-dev webpack-cli 添加到当前项目
module.exports = {
     mode: 'none',
     entry: "./src/main",// 指定入口文件(并非启动项)可以不加后缀,如果不指定默认为index
     output: {
          filename: "myTS.js",// webpack 打包后的文件就是他
          path: __dirname + "/distt"// 指定打包的js输出目录
     },
     devtool: "source-map",
     resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"]
     },

     module: {
          rules: [
               // 这些依赖会让TypeScript和webpack在一起良好地工作。 
               // 这就允许你在调试最终生成的文件时就好像在调试TypeScript源码一样。

               //安装 npm install --save-dev typescript awesome-typescript-loader source-map-loader
               // awesome-typescript-loader可以让Webpack使用TypeScript的标准配置文件 tsconfig.json编译TypeScript代码。 
               { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
               // source-map-loader使用TypeScript输出的sourcemap文件来告诉webpack何时生成 自己的sourcemaps。
               { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
          ]
     },


     externals: {
          "react": "React",
          "react-dom": "ReactDOM"
          // 理想情况下，我们只需要在浏览器里引入React模块，
          // 但是大部分浏览器还没有支持模块。 
          // 因此大部分代码库会把自己包裹在一个单独的全局变量内，比如： jQuery或_。 ------这里使用的应该就是这个__dirname
          // 这叫做“命名空间”模式，webpack也允许我们继续使用通过这种方式写的代码库。
          // 通过我们的设置 "react": "React"，webpack会神奇地将所有对"react"的导入转换成从React全局变量中加载。
     }
};