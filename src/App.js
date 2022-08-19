import './App.scss';
import {useEffect, useState} from "react";
import BeerContainer from './components/BeerContainer/BeerContainer'
import MainContainer from './container/MainContainer/MainContainer';
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
      <div className='App-header'>
        Beer Generator
      </div>
      <main>
      <div className='main-content'> 
      
      {beers && <MainContainer beers={beers}/>}
      </div>
      
     {/*} <div>
       {beers && <BeerContainer beers={beers} />}
  </div>*/}
      </main>
      
    </div>
  );
}
export default App;
