export default {
  props: [{
    name: 'icon',
    type: 'String',
    default: '',
    desc: '显示的按钮的图标'
  }, {
    name: 'multiple',
    type: 'Boolean',
    default: 'false',
    desc: '是否可以多选'
  }, {
    name: 'desktop',
    type: 'Boolean',
    default: 'false',
    desc: '设置为 `true`, 菜单将被调整为桌面版的样式，缩小高度和调整padding'
  }, {
    name: 'maxHeight',
    type: 'Number',
    default: '',
    desc: '最大高度，超出则显示滚动条'
  }, {
    name: 'open',
    type: 'Boolean',
    default: 'false',
    desc: '是否显示菜单'
  }, {
    name: 'itemClickClose',
    type: 'Boolean',
    default: 'true',
    desc: '是否在点击菜单项之后关闭'
  }, {
    name: 'anchorOrigin',
    type: 'Object',
    default: '{vertical: \'top\',horizontal: \'left\'}',
    desc: '锚点的位置'
  }, {
    name: 'targetOrigin',
    type: 'Object',
    default: '{vertical: \'top\',horizontal: \'left\'}',
    desc: '目标的的位置'
  }, {
    name: 'tooltip',
    type: 'String',
    default: '',
    desc: '工具提示文本'
  }, {
    name: 'tooltipPosition',
    type: 'String',
    default: 'bottom-center',
    desc: '提示文字文字, [垂直位置]-[水平位置]，垂直位置: top，middle, bottom; 水平位置: left, center, right'
  }, {
    name: 'value',
    type: '',
    default: '',
    desc: '设置以后菜单将为可选择的菜单，当菜单项的value 和 当前 value相等，则菜单项为被选中状态'
  }],
  slots: [{
    name: 'default',
    desc: '用来放置`menuItem` 、 `subHeader` 、 `divider` 等组件'
  }],
  events: [{
    name: 'itemClick',
    desc: '当菜单项点击时触发事件,会传入 `menuItem` 组件对象'
  }, {
    name: 'change',
    desc: '当value改变时触发事件，会传入新的 `value`'
  }, {
    name: 'open',
    desc: '菜单打开时事件'
  }, {
    name: 'close',
    desc: '菜单关闭时事件'
  }]
}
