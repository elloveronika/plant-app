export default function Toggle(props) {
  return (
    <div className="toggle">
      <h3>Monthly Billing</h3>
      <label className="switch">
        <input
          type="checkbox"
          onClick={() => {
            props.func();
          }}
        />
        <span className="slider round"></span>
      </label>
      <h3>Yearly Billing</h3>
    </div>
  );
}
