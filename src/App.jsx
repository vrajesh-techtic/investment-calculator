import logo from "./assets/main-logo.png";
import "./App.css";
import InputContainer from "./components/InputContainer";

function App() {
  return (
    <>
      <header>
        <img src={logo} id="logo" alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InputContainer />
    </>
  );
}

export default App;
