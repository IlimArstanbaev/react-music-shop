import "./App.css";
import MyRoutes from "./MyRoutes";
import Header from "./components/Navbar/Header";
import ProductContext from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductContext>
        <MyRoutes />
      </ProductContext>
    </div>
  );
}

export default App;
