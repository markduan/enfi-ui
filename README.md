这是一个模版项目，使用此模版 bundle 出来的组件可以直接被渲染引擎使用

## 开始

```
yarn install
yarn start
```

打开浏览器，访问: http://localhost:8080

## 部署

- 执行 yarn run bundle
- 将打包好的文件放到可以公开下载的文件服务上
- 记录一下文件的上传路基，例如 `http://example.com/dist/enfi-ui@1.0.0/index.min.js`
- 调用低代码平台配置中心的 API，在配置中心中保存以下数据：
  - key: `third_party_package_entry:enfi-ui:1.0.0`
  - value: 组件 bundle 后的文件地址，例如 `http://example.com/dist/enfi-ui@1.0.0/index.min.js`

**注意**：

- 强烈建议每次组件更新之后都重新打包并**修改版本**
- bundle 文件的本地路径会带上项目的 `package.json` 中的版本号
- 上传的文件路径建议使用版本号作区分
- 没出发布新版本都要掉用配置中心的 API 设置对应的 key 和 value
- 配置中心内保存的 key 格式为 `third_party_package_entry:${packageName}:${packageVersion}`，此处的 packageName 和 packageVersion 要与渲染引擎使用的 Schema 中的组件要保持统一

## 使用

### 编写 Schema

例如：
```
{
  "node": {
    "id": "some_id",
    "type": "react-component",
    "packageName": "enfi-ui",
    "packageVersion": "1.0.0",
    "exportName": "Button",
    "props": {
      "test": {
        "type": "constant_property",
        "value": "click me!"
      }
    }
  }
}
```
