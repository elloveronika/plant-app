export default function Toggle(props) {
  return (
    <div className="toggle">
      <h3>monthly</h3>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            props.func();
          }}
        />
        <span className="slider round"></span>
      </label>
      <h3>yearly</h3>
    </div>
  );
}
