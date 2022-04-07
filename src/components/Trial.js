import image from "../images/icon-check.svg";

export default function Trial() {
  return (
    <div className="trial">
      <ul>
        <li>
          <img src={image} /> Unlimited plant support
        </li>
        <li>
          <img src={image} /> Access to community
        </li>
        <li>
          <img src={image} /> Monthly growth chart reports
        </li>
      </ul>
      <button>start my plan-t</button>
    </div>
  );
}
