import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header count={count} cart={count} price={125.00 * count} />
      <Main minus={() => {
        setCount(count - 1);
        if (count === 1) {
          document.querySelector(".nav-right li span").style.opacity = "0";
        }
      }}
      count={count} plus={() => {
        setCount(count + 1);
        document.querySelector(".nav-right li span").style.opacity = "1";
        }}
        disabled={count === 0}
        />
    </>
  );
}

export default App;
