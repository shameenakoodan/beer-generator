const BeerCard = ({name,tagline,first_brewed,description,imageurl})=>{
    return (
        <div>
            Name : {name}
            Tag Line : {tagline}
            Since :{first_brewed}
            {description} 
            <img src ={imageurl}></img>
        </div>
    );
}
export default BeerCard;