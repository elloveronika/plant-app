import PriceInfo from "./components/PriceInfo";
import Toggle from "./components/Toggle";
import Scroll from "./components/Scroll";
import Trial from "./components/Trial";
import { useState } from "react";
import Plants from "./components/Plants";
// import plants from "plants.db";

function App() {
  const [isMonthly, setIsMonthly] = useState("monthly");

  const [plantNum, setPlantNum] = useState(0);

  const [currentPlant, setCurrentPlant] = useState(null);

  function handleCurrentPlant(plant) {
    setCurrentPlant(plant);
  }

  function handlePlantNumChange(num) {
    setPlantNum(num);
    console.log(num);
  }

  function handleToggle() {
    setIsMonthly((prevData) => (prevData == "monthly" ? "yearly" : "monthly"));
  }

  return (
    <div className="maincard">
      {currentPlant ? (
        <>
          <h1 className="plantprice">you have chosen: {currentPlant.name}</h1>

          <PriceInfo
            subType={isMonthly}
            plantNum={plantNum}
            plantPrice={currentPlant.price}
          />
          <Scroll changePlantNum={handlePlantNumChange} />
          <Toggle func={handleToggle} />
        </>
      ) : (
        <h3 className="plantprice">first things first, select your plant!</h3>
      )}
      <Trial />
      <Plants
        currPlant={currentPlant}
        changeCurrentPlant={handleCurrentPlant}
      />
    </div>
  );
}

export default App;
