import './App.scss';
import {useEffect, useState} from "react";
import BeerContainer from './components/BeerContainer/BeerContainer'
import MainContainer from './components/MainContainer/MainContainer';

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
      <div className='side-nav'> 
      
      {beers && <MainContainer beers={beers}/>}
      </div>
      
     {/*} <div>
       {beers && <BeerContainer beers={beers} />}
  </div>*/}
    </div>
  );
}
export default App;
