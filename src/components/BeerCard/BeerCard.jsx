import './BeerCard.scss';
const BeerCard = ({name,tagline,first_brewed,description,imageurl})=>{
    return (
        <div className="beer-card">
            Name : {name}
            Tag Line : {tagline}
            Since :{first_brewed}
            {description} 
            <img src ={imageurl} width="65rem"></img>
        </div>
    );
}
export default BeerCard;