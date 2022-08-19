import SearchBox from "../../components/SearchBox/SearchBox";
import BeerContainer from "../../components/BeerContainer/BeerContainer";
import CheckBox from "../../components/CheckBox/CheckBox";

import { useState } from "react";

import "./MainContainer.scss";

const MainContainer = (props)=>{
const [searchTerm,setSearchTerm]  = useState("");
const [checked1, setCheckedAbv] = useState(false);
const [checked2,setCheckedRange] = useState(false);
const [checked3,setCheckedPh] = useState(false);

/*const beerDetails = props.beers.map((beer)=>{
    return beer;
});*/

//Handle the input from search box
const handleInput = (event)=>{
    const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
}

//Filter the words or do the search
let filteredBeers = props.beers.filter((beer) => {
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
        default:
            break;
    }
       
    
  };
    return (
        <div className="flex-container">
            <div className="left-side">
                <SearchBox 
                label = {"Beer Search"} 
                handleInput = {handleInput}
                />
                <CheckBox 
                title = {"High Alcohol (ABV value greater than 6%)"} 
                handleChange={handleChange} 
                id="1"/>
                <CheckBox title = {"Classic Range (Was first brewed before 2010)"}
                handleChange = {handleChange}
                id = "2"/>
                <CheckBox title = {"High Acidity (pH lower than 4)"} 
                handleChange = {handleChange}
                id = "3"/>
            </div>
            <div className="right-side">
                <BeerContainer beers = {filteredBeers}/> 
            </div>
        </div>
    );
}
export default MainContainer;