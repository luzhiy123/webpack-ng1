本项目的将多个项目合并，然后实现按需打包，再采用不同框架重构部分功能

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
- [ ] 构建不同项目时分离vendor

# 遇到的问题
- [x] angularjs压缩问题  
    依赖注入方式（grunt中用在build时解决）  
    ($q) => {} 改为 [$q, ($q) => {}]
- [x] babel-es2017  
    原想引入babel-es2017，后来发现不需要
- [x] 组件依赖  
    front-tb-ui依赖 lodash、angular-base64、angular-cookies、angular-ui-bootstrap以及bootstrap的css
    其中bootstrap的css文件需要loader引入（loader使用可能不对，但是不影响基本的css）

