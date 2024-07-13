export const defaultPanelRegistry = (editor) =>{
    const fun = (cxt) =>{
        return {
            init() {
                const { skeleton, config } = ctx;
                skeleton.add({
                    area: 'mainArea',
                    name: 'designer',
                    type: 'Widget',
                    content: <DesignerPlugin />,
                  });

            }
        }
    }
}