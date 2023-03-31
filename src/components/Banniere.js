import "../styles/Banniere.css";
import logo from "../assets/logo.png";
import Cart from "./Cart";

function Banner() {
  const titre = "La Maison Jungle 🪴";
  return (
    <>
      <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1> {titre.toUpperCase()} </h1>
      </div>
      <div className="lmj-cart">
        <Cart />
      </div>
    </>
  );
}

export default Banner;
