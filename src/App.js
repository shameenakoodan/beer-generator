import './App.css';
import {useEffect, useState} from "react";
import BeerContainer from './components/BeerContainer/BeerContainer'

const App = () => {
  const [beers,setBeers] = useState();
  const getBeer = () =>{
    fetch("https://api.punkapi.com/v2/beers")
    .then((res)=>{
      //console.log(result.json());
      return res.json();
    })
    .then((data)=>{
      //console.log(data);
      setBeers(data);
    });
  }
  
  useEffect(getBeer,[]);
  return (
    <div className="App">
      {beers && <BeerContainer beers={beers} />}
    </div>
  );
}

export default App;
