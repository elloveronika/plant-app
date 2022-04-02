import PriceInfo from "./components/PriceInfo";
import Toggle from "./components/Toggle";
import Scroll from "./components/Scroll";
import Trial from "./components/Trial";
import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState("monthly");

  const [plantNum, setPlantNum] = useState(0);

  function handlePlantNumChange(num) {
    setPlantNum(num);
    console.log(num);
  }

  function handleToggle() {
    setIsMonthly((prevData) => (prevData == "monthly" ? "yearly" : "monthly"));
  }

  return (
    <div className="maincard">
      <PriceInfo subType={isMonthly} plantNum={plantNum} />
      <Scroll changePlantNum={handlePlantNumChange} />

      <Toggle func={handleToggle} />
      <Trial />
    </div>
  );
}

export default App;
