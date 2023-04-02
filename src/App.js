import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const zeroProduct = () => {
    document.querySelector(".content1").style.display = "block";
    document.querySelector(".content2").style.display = "none";
    document.querySelector(".nav-right li span").style.opacity = "0";
    setCount(0);
};

  return (
    <>
      <Header count={count} cart={count} price={125.00 * count} cancel={zeroProduct} />
      <Main minus={() => {setCount(count - 1)}}
      count={count} plus={() => {setCount(count + 1)}} disabled={count === 0}
      cannot={count === 0}
      />
    </>
  );
}

export default App;
