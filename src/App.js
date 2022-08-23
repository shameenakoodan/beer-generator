import './App.scss';
import {useEffect, useState} from "react";
import MainContainer from './container/MainContainer/MainContainer';
const App = () => {
  const [beers,setBeers] = useState();
  const getBeer = () =>{
    fetch("https://api.punkapi.com/v2/beers")
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      setBeers(data);
    });
  }
  
  useEffect(getBeer,[]);
  const refreshPage=()=>{
    window.location.reload(false);
  }
  return (

    <div className="App">
      <div className='App-header' onClick={refreshPage}>
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
