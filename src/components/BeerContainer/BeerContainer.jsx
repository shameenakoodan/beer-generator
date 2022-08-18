import BeerCard from "../BeerCard/BeerCard";
import "./BeerContainer.scss";
const BeerContainer = (props) =>{
    
    const beerDetails = props.beers.map((beer)=>{
        return(
            <BeerCard key = {`${beer.id}`} name = {`${beer.name}`} tagline = {`${beer.tagline}`} since = {`${beer.first_brewed}`} description = {`${beer.description}`} imageurl = {`${beer.image_url}`}/>
        );
    })
    return <div className='beer-container'>{beerDetails}</div>;
}
export default BeerContainer;