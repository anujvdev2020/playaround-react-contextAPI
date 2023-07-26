import "./styles.css";
import { MyContext } from "./MyContext";
import { useState } from "react";
import MyComponent from "./MyComponent";

export default function App() {
  const [user, setText] = useState({ name: "Anuj", age: 25 });
  return (
    <div className="App">
      <MyContext.Provider value={{ user, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}
