import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    // BEM class naming convension
    <div className="app">
      {/* Header */}
      <Header />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
    </div>
  );
}

export default App;
