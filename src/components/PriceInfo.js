export default function PriceInfo(props) {
  const totalPrice = props.plantPrice * props.plantNum;
  // console.log("this is inside priceInfo props price", props.plantPrice);

  return (
    <div className="priceinfo">
      <h2 className="plantprice">Plant Amount: {props.plantNum} </h2>
      <h2>
        <span className="cost">
          $
          {props.subType == "monthly"
            ? totalPrice
            : Math.round((props.plantNum * totalPrice) / 12)}
        </span>{" "}
        / {props.subType}
      </h2>
    </div>
  );
}
