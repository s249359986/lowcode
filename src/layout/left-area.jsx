

function LopArea(props) {
    const top = [];
    const { area } = props;
    const {container} = area;
    container.items.forEach(item => {
  
      const content = (
        <div draggable key={`top-area-${item.name}`}>
          {item.content}
        </div>
      );
      top.push(content)    
    });
      return (
        <div> 
          {top}
          </div>
      );
    }
    
    export default LopArea;
    