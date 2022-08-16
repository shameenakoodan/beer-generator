import BeerCard from "../BeerCard/BeerCard";

const BeerContainer = (props) =>{
    const beerDetails = props.beers.map((beer)=>{
        return(
            <BeerCard name = {`${beer.name}`} />
        );
    })
    return <div>{beerDetails}</div>;
}
export default BeerContainer;