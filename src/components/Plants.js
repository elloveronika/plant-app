import plants from "../images/plants";
const plantConfig = [
  {
    name: "aloe",
    img: plants.aloe,
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
    name: "snek",
    img: plants.snek,
    price: 14,
  },
];

export default function Plants(props) {
  function handlePlantSelect(plant) {
    console.log(plant.price);
    props.changeCurrentPlant(plant);
  }

  return (
    <div className="plants">
      {plantConfig.map((plant, i) => (
        <img key={i} src={plant.img} onClick={() => handlePlantSelect(plant)} />
      ))}
      {/* <h1>each image will appear here</h1> */}
    </div>
  );
}
//set current plant
// create an onclick for the image
// give the handle function the price of each plant
