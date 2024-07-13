import React,{ useCallback } from 'react';



function Title(props) {
  const { title } = props

  return (
    <div className="App">
      {title}
    </div>
  );
  }
// 示例 Logo widget
const TitlePlugin = (ctx) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      // const scenarioDisplayName = config.get('scenarioDisplayName');
      // const scenarioInfo = config.get('scenarioInfo');      
      // 注册 logo widget
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'title',
        content: Title,           
        contentProps: {
          title: 'title',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
}
TitlePlugin.pluginName = 'TitlePlugin';
TitlePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default TitlePlugin;