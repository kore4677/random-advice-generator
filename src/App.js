import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Load from "./components/Load";

function App() {
  // const [name, setName] = useState("Kachi");
  const [adviceData, setAdviceData] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    // console.log("i ran");

    // fetch("https://api.adviceslip.com/advice")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });

    let getData = async ()=>{
      let res = await fetch('https://api.adviceslip.com/advice')
      let finalData = await res.json();
      console.log(finalData);
      setAdviceData(finalData)
      setloading(false)
    };

    setTimeout(()=>{
      getData();
    }, 3000)
  
  }, []);

  // let changeName = () => {
  //   setName("Obi");
  //   // if ( name === 'kachi') {
  //   //   setName('obi')
  //   // } else setName('Kachi')
  // };

  return (
    <div className="App">
      {!loading && <Homepage newAdviceData= {adviceData}/>}
      {loading && <Load newLoading={loading}/>}
      {/* <p>{name}</p>
      <button
        onClick={() => {
          changeName();
        }}
      >
        {" "}
        Click Me
      </button> */}
    
    </div>
  );
}

export default App;

// Hooks
//useState
// useEffect
// useRef
// useReducer
// useMemo
// useCallback
// useLayoutEffect
