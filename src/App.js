import logo from "./logo.svg";
import "./App.css";
import MyCounter from "./components/MyCounter";
import AuthApp from "./components/AuthApp";

function App() {
  return (
    <div className="App">
      <MyCounter />
      <AuthApp />
    </div>
  );
}

export default App;
