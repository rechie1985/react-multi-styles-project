### demo

需要自行配置的内容

> package.json
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "projectA": "webpack-dev-server --hot --config webpack.config.projectA.js",
  "projectB": "webpack-dev-server --hot --config webpack.config.projectB.js "
},
```
> webpack.config.yourProjectName.js中, loader的配置，regexp-replace-loader参数可根据当前项目自行修改，其中match.pattern为需要进行替换匹配的正则，replaceWith为替换后的字符串

```
{
    test: /\.scss$/,
    loader: 'style-loader!css-loader!sass-loader!regexp-replace-loader?{"match":{"pattern": "#{{projectName}}", "flags": "g"}, "replaceWith": "projectA"}'
}
```

修改好上述两个地方后，在所有组件的样式文件中都如下引用base样式库
```
@import '../../common-styles/#{{projectName}}.scss';
```


使用的webpack-loader: `style-loader`、`css-loader`、`sass-loader`、`regexp-replace-loader`
关于regexp-replace-loader的配置可以参考[github](https://github.com/EventMobi/regexp-replace-loader)
