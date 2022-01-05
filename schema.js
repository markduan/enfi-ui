export default {
  "apiStateSpec": {
    "todos": {
      "apiID": "post:/system/app/f6lbr/raw/inner/form/custom/todo_search.r"
    },
  },
  "sharedStatesSpec": {},
  "node": {
    "id": "container",
    "type": "html-element",
    "name": "div",
    "props": {
      "style": {
        "type": "constant_property",
        "value": {
          "padding": "20px",
          "width": "700px"
        }
      }
    },
    "children": [
      {
        "id": "global-title",
        "type": "html-element",
        "name": "h1",
        "props": {
          "children": {
            "type": "constant_property",
            "value": "此页面是展示自定义组件和渲染引擎结合的 demo"
          }
        }
      },
      {
        "id": "this-is-a-enfi-component-button",
        "type": "html-element",
        "name": "p",
        "props": {
          "children": {
            "type": "constant_property",
            "value": "下面是在 enfi-ui 项目中实现的组件"
          }
        }
      },
      {
        "id": "enfi-ui-button",
        type: 'react-component',
        packageName: 'enfi-ui',
        exportName: 'Button',
        packageVersion: 'whatever',
        "props": {
          "text": {
            "type": "constant_property",
            "value": "点击我"
          },
          onClick: {
            type: 'functional_property',
            func: {
              type: 'raw',
              args: 'e',
              body: 'console.log("button clicked");alert("点击事件")',
            },
          }
        }
      },
      {
        "id": "enfi-ui-select",
        type: 'react-component',
        packageName: 'enfi-ui',
        exportName: 'Select',
        packageVersion: 'whatever',
        "props": {
          "options": {
            "type": "constant_property",
            "value": [
              { label: 'option_1', value: 'option_1' },
              { label: 'option_2', value: 'option_2' },
              { label: 'option_3', value: 'option_3' },
              { label: 'option_4', value: 'option_4' },
            ]
          },
          onChange: {
            type: 'functional_property',
            func: {
              type: 'raw',
              args: 'v',
              body: 'alert("选择了值:" + v)',
            },
          }
        }
      },
      {
        "id": "this-is-a-enfi-component-antd",
        "type": "html-element",
        "name": "p",
        "props": {
          "children": {
            "type": "constant_property",
            "value": "下面是在 antd 项目中实现的组件"
          }
        }
      },
      {
        "id": "antd-button",
        type: 'react-component',
        packageName: 'antd',
        exportName: 'Button',
        packageVersion: 'whatever',
        "props": {
          "children": {
            "type": "constant_property",
            "value": "点击我"
          },
          onClick: {
            type: 'functional_property',
            func: {
              type: 'raw',
              args: 'e',
              body: 'console.log("button clicked");alert("点击事件")',
            },
          }
        }
      },
      {
        "id": "antd-select",
        type: 'react-component',
        packageName: 'antd',
        exportName: 'Select',
        packageVersion: 'whatever',
        "props": {
          "options": {
            "type": "constant_property",
            "value": [
              { label: 'option_1', value: 'option_1' },
              { label: 'option_2', value: 'option_2' },
              { label: 'option_3', value: 'option_3' },
              { label: 'option_4', value: 'option_4' },
            ]
          },
          onChange: {
            type: 'functional_property',
            func: {
              type: 'raw',
              args: 'v',
              body: 'alert("选择了值:" + v)',
            },
          }
        }
      },
    ]
  }
}
