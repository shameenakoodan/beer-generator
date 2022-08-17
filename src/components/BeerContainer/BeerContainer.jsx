import BeerCard from "../BeerCard/BeerCard";

const BeerContainer = (props) =>{
    const beerDetails = props.beers.map((beer)=>{
        return(
            <BeerCard name = {`${beer.name}`} tagline = {`${beer.tagline}`} since = {`${beer.first_brewed}`} description = {`${beer.description}`} imageurl = {`${beer.image_url}`}/>
        );
    })
    return <div>{beerDetails}</div>;
}
export default BeerContainer;