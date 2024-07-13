

function TopArea(props) {
  const top = [];
  const { area } = props;
  const {container} = area;
  container.items.forEach(item => {
    const onDragStart = (e, id) => {
      e.dataTransfer.setData("id", id || new Date().getTime());
    };

    const content = (
      <div onDragStart={(e) => onDragStart(e, item.id)} draggable key={`top-area-${item.name}`}>
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
  
  export default TopArea;
  