import { useContext } from "react";
import { MyContext } from "./MyContext";

function MyComponent() {
  const { user, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={() => setText({ name: "Hello" })}>Click me</button>
    </div>
  );
}

export default MyComponent;
