import Cheflogo from "../assets/Cheflogo.png";

export default function Header() {
  return (
    <header>
      <img src={Cheflogo} />
      <h1>Chef Claude</h1>
    </header>
  );
}
