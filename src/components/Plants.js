import plants from "../images/plants";
const plantConfig = [
  {
    name: "succulent",
    img: plants.succulent,
    price: 11,
  },
  {
    name: "pothos",
    img: plants.pothos,
    price: 12,
  },
  {
    name: "monstera",
    img: plants.monstera,
    price: 13,
  },
  {
    name: "snake",
    img: plants.snake,
    price: 14,
  },
];

export default function Plants(props) {
  function handlePlantSelect(plant) {
    console.log(plant.price);
    props.changeCurrentPlant(plant);
  }
  const isSelected = props.currPlant;

  console.log(isSelected, "this is plant inside plant comp");
  
  const isSelectedStyle = {
    filter: `grayscale(${100}%)`,
  };

  return (
    <div className="plants">
      {plantConfig.map((plant, i) => {
        if (isSelected && isSelected.name == plant.name) {
          return (
            <img
              key={i}
              src={plant.img}
              onClick={() => handlePlantSelect(plant)}
            />
          );
        }
        if (isSelected) {
          return (
            <img
              key={i}
              style={isSelectedStyle}
              src={plant.img}
              onClick={() => handlePlantSelect(plant)}
            />
          );
        } else {
          return (
            <img
              key={i}
              src={plant.img}
              onClick={() => handlePlantSelect(plant)}
            />
          );
        }
      })}
      {/* <h1>each image will appear here</h1> */}
    </div>
  );
}
//set current plant
// create an onclick for the image
// give the handle function the price of each plant
