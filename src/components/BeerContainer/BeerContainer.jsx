import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";
const BeerContainer = (props) =>{
    
    const beerDetails = props.beers.map((beer)=>{
        return(
            <BeerCard key = {`${beer.id}`} name = {`${beer.name}`} tagline = {`${beer.tagline}`} first_brewed = {`${beer.first_brewed}`} abv={`${beer.abv}`} description = {`${beer.description}`} ph = {`${beer.ph}`} imageurl = {`${beer.image_url}`}/>
        );
    })
    return <div className='beer-container'>{beerDetails}</div>;
}
export default BeerContainer;