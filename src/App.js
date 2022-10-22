import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./Styles/mixins.scss"
import Products from "./Pages/Products/Products"

import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Products />
    </div>
  );
}

export default App;
