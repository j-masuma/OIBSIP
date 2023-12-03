import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
    </div>
  );
}

export default App;
