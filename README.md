
现在多项目合并是通过不同目录下打包，现在准备改用webpack打包
再在原来使用ng1的基础上把部分功能通过react、vue等重构
# 需要做的事
- [x] webpack
- [x] angularJs
- [x] scss
- [x] eslint
- [x] es6+编辑成5
- [x] 原组件引入
- [x] css提取
- [x] vendor分离
- [x] 重构小项目
- [x] 同时使用ng1与react构建多入项目
- [x] 构建不同项目时分离vendor

# 遇到的问题
- [x] angularjs压缩问题  
    依赖注入方式 采用ng-annotate-patched
- [x] babel
    @babel/preset-react' '@babel/preset-env
- [x] 组件依赖
    front-tb-ui依赖 lodash、angular-base64、angular-cookies、angular-ui-bootstrap以及bootstrap的css
    front-tb-ui 为公司内部组建
- [x] cacheGroups分离  
    打包思路：
        1、分离出node_modules中代码
        2、css分离
        3、将ng和react依赖代码分开打包
        4、对共用代码打包到commons中