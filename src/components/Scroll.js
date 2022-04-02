export default function Scroll(props) {
  function handleChange(event) {
    console.log("this is event", event.target.value);
    const num = event.target.value;
    props.changePlantNum(num);
  }

  return (
    <div className="scrollbar">
      <input type="range" min={1} max={10} onChange={handleChange} />
    </div>
  );
}
