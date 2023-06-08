import HomeCom from "../components/homeComponents/HomeCom";
import Kurslar from "../components/pages/Kurslar";
import VideoComponent from "../components/video/VideoComponent";
import "./Main.css"

const Main = () => {
  return (
    <div className="main">
      <div className="asosiy">
    <HomeCom/>
      </div>
     <VideoComponent/>
      <Kurslar/>


    </div>
  );
}

export default Main