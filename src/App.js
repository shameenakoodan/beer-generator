import './App.scss';
import {useEffect, useState} from "react";
import BeerContainer from './components/BeerContainer/BeerContainer'
import SideNav from './components/SideNav/SideNav';

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
        <SideNav />
      </div>
      
      <div>
        {beers && <BeerContainer beers={beers} />}
      </div>
    </div>
  );
}
export default App;
