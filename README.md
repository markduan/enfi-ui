# 此项目展示了如何构建一套可以被渲染引擎使用的组件库

## 开始

```
yarn install
yarn start
```

## 核心步骤：

- 使用 rollup 将组件打包成 systemjs 格式
- 在 html 的 `import map` 中声明组件的地址
- 在 `schema` 中指定组件的名称、exportName 等信息
- done
