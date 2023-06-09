import HomeCom from "../components/homeComponents/HomeCom";
import Kurslar from "../components/pages/Kurslar";
import Takliflar from "../components/pages/Takliflar";
import VideoComponent from "../components/video/VideoComponent";
import "./Main.css"

const Main = () => {
  return (
    <div className="main">
      <div className="asosiy">
    <HomeCom/>
      </div>
    
      <Kurslar/>
<Takliflar/>

    </div>
  );
}

export default Main