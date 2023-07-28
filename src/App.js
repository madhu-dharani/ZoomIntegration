import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MyContext from "./context/context";
function App() {
  const [sharedValue, setsharedValue] = useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{ sharedValue, setsharedValue }}>
        <Home />
      </MyContext.Provider>
    </div>
  );
}

export default App;
