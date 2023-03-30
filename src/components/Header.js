import Cart from "./Cart";

function Header() {
    const titre = "La Maison Jungle 🪴";
  return (
    <>
      <h1> {titre.toUpperCase()} </h1>
      <Cart />
    </>
  );
}

export default Header;
