import Cheflogo from "../assets/Cheflogo.png";
function Header() {
  return (
    <div className="header">
      <img src={Cheflogo} alt="cheflogo" className="logoimg" />
      <h2>Chef Claude</h2>
    </div>
  );
}

export { Header };
