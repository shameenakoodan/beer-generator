import './BeerCard.scss';
const BeerCard = ({name,tagline,first_brewed,description,abv,ph,imageurl})=>{
    return (
        <div className="beer-card">
            <img src ={imageurl} width="65rem"></img>
            <p>Name : </p>{name}<br />
            <p>Tag Line : </p>{tagline}<br />
            <p>Since :</p>{first_brewed}<br/>
            <p>ABV : </p>{abv}<br />
            <p>Ph : </p>{ph}<br />
            {description} <br />
            
        </div>
    );
}
export default BeerCard;