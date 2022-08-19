import './BeerCard.scss';
const BeerCard = ({name,tagline,first_brewed,description,abv,ph,imageurl})=>{
    return (
        <div className="beer-card">
            Name : {name}<br />
            Tag Line : {tagline}<br />
            Since :{first_brewed}<br/>
            <b>ABV : </b>{abv}<br />
            <b>Ph : </b>{ph}<br />
            {description} <br />
            <img src ={imageurl} width="65rem"></img>
        </div>
    );
}
export default BeerCard;