import React from 'react';
function Logo(props) {
  const { logo } = props
    return (
      <div className="App">
        <img src={logo} />
      </div>
    );
  }
// 示例 Logo widget
const LogoPlugin = (ctx) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      // const scenarioDisplayName = config.get('scenarioDisplayName');
      // const scenarioInfo = config.get('scenarioInfo');      
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo />,           
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
}
LogoPlugin.pluginName = 'LogoSamplePlugin';
LogoPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default LogoPlugin;