import SearchBox from "../../components/SearchBox/SearchBox";
import BeerContainer from "../../components/BeerContainer/BeerContainer";
import { useState } from "react";
const SideNav = (props)=>{
    const [searchTerm,setSearchTerm]     = useState("");
    const beerDetails = props.beers.map((beer)=>{
        return beer;
    });
    const handleInput = (event)=>{
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    }
const filteredBeers = beerDetails.filter((beer) => {
    console.log(beer);
  });
    return (
        <>
            <SearchBox 
            label = {"Beer Search"} 
            searchTerm = {searchTerm}
            handleInput = {handleInput}
            />
           
        </>
    );
}
export default SideNav;