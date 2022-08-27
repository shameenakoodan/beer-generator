import SearchBox from "../../components/SearchBox/SearchBox";
import BeerContainer from "../../components/BeerContainer/BeerContainer";
import CheckBox from "../../components/CheckBox/CheckBox";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useState } from "react";

import "./MainContainer.scss";
import Button from "../../components/Button/Button";

const MainContainer = (props)=>{
const [arrayBeers,setBeers] =useState(props.beers);

const [searchTerm,setSearchTerm]  = useState("");
const [checked1, setCheckedAbv] = useState(false);
const [checked2,setCheckedRange] = useState(false);
const [checked3,setCheckedPh] = useState(false);

const [isOpen,setisOpen] = useState(false);
const togglePopUp = () =>{
    setisOpen(!isOpen);
}

const [insertValues,setInsertValues] = useState();
/*const beerDetails = props.beers.map((beer)=>{
    return beer;
});*/

//Handle the input from search box
const handleInput = (event)=>{
    const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
}

//Filter the words or do the search
let filteredBeers =arrayBeers.filter((beer) => {

    const beerTitleLower = beer.name.toLowerCase();
    const [month,year] = beer.first_brewed.split('/');
    if(checked1 && checked2 && checked3)
        return beerTitleLower.includes(searchTerm) && beer.name && beer.abv > 6  && year <2010  && beer.ph <4
    if(checked1 && checked2)
        return beerTitleLower.includes(searchTerm) && beer.name && beer.abv > 6 && year <2010;
    if(checked1 && checked3)
        return beerTitleLower.includes(searchTerm) && beer.name && beer.abv > 6 && beer.ph <4;
    if(checked2 && checked3)
        return beerTitleLower.includes(searchTerm) && beer.name && year <2010 &&  beer.ph <4;
    if((checked1)){
        return beerTitleLower.includes(searchTerm) && beer.name && beer.abv > 6;
    }
    if((checked2)){
        return beerTitleLower.includes(searchTerm) && beer.name && year <2010;
    }
    if(checked3){
        return beerTitleLower.includes(searchTerm) && beer.name && beer.ph <4;
    }  
    return beerTitleLower.includes(searchTerm) && beer.name;
});

//Handle input from check boxes
const handleChange = (event) => {
    const id  = event.target.id;
    switch(id){
        case '1':
            setCheckedAbv(!checked1);
            break;
        case '2':
            setCheckedRange(!checked2);
            break;
        case '3':
            setCheckedPh(!checked3);
            break;
        default:
            break;
    }
  };
  //Handle the button click
  const handleClick = (event)=>{
        fetch("http://localhost:3010")
        .then((res)=>{
          return res.json();
        })
        .then((data)=>{
            setBeers(data.beers);
        });
  }
  const newBeer = {
    "id": "1",
    "name": "Buzz",
    "tagline": "A Real Bitter Experience.",
    "first_brewed": "09/2007",
    "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    "image_url": "https://images.punkapi.com/v2/keg.png",
    "abv": "4.5",
    "ph": "4.4"
}
    
  const addBeers = (event)=>{
    fetch("http://localhost:3010",
    {
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newBeer)
    }).then(()=>{
        console.log("New Beer Added")
    })
    handleClick();
    }
 
    return (
        <Router>
                <div className="flex-container">
            <div className="left-side">
                <SearchBox 
                label = {"Beer Search"} 
                handleInput = {handleInput}
                />
                <CheckBox 
                title = {"ABV (over 6%)"} 
                handleChange={handleChange} 
                id="1"/>
                <CheckBox title = {"Classic Range  "}
                handleChange = {handleChange}
                id = "2"/>
                <CheckBox title = {"Acidic (pH < 4)"} 
                handleChange = {handleChange}
                id = "3"/>
                <Button title = {"Special Beers"} handleClick = {handleClick}/>
                <Button title = {"Add Beers"} handleClick = {addBeers} />
                <button onClick={togglePopUp}>Add beers</button>
                {isOpen && <Form  togglePopUp={togglePopUp}/>}
            </div>
            <BeerContainer beers = {filteredBeers} />
            {
                /**<div className="right-side">
                <BeerContainer beers = {filteredBeers}/> 
    </div> */
            }
            
            
        </div>
        </Router>
        
    );
}
export default MainContainer;