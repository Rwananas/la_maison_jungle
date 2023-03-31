import Banner from "./components/Banniere";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Banner />
          <ShoppingList />
        </>
      </header>
    </div>
  );
}

export default App;
