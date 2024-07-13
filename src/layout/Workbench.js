import TopArea from "./top-area";
import MainArea from "./main-area";
import LeftArea from "./left-area";

function Workbench(props) {
  console.log(props);
  const { skeleton } = props;

  const handleDragOver = (e) => {
    e.preventDefault(); // 阻止默认行为，以便可以放置
    console.log("handleDragOver",e)    
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    console.log("handleDragEnter",e)
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    console.log("handleDragLeave",e)
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id')
    console.log("handleDrop",e)
    console.log("handleDrop:id",id)
    // 处理放置逻辑，例如更新应用状态
  };




  return (
    <div 
    onDragOver={handleDragOver} 
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}
    >      
      <TopArea area={skeleton.topArea} />
      <LeftArea area={skeleton.leftArea} />
      <MainArea area={skeleton.mainArea} />
    </div>
  );
}

export default Workbench;
