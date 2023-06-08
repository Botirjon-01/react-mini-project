import HomeCom from "../components/homeComponents/HomeCom";
import Kurslar from "../components/pages/Kurslar";
import "./Main.css"

const Main = () => {
  return (
    <div className="main">
      <div className="asosiy">
    <HomeCom/>
      </div>
     
      <Kurslar/>


    </div>
  );
}

export default Main