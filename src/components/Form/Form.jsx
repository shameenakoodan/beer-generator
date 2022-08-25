import { useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";
const Form=()=>{
   // const [newBeer,setNewBeer] =useState();
    const newBeer = {
      "id": "1",
      "name": "Buzz",
      "tagline": "A Real Bitter Experience.",
      "first_brewed": "09/2007",
      "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
      "image_url": "https://images.punkapi.com/v2/keg.png",
      "abv": "4.5",
      "ph": "4.4"
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let id = event.target.id.value;
    console.log("id    " + id);
    let name = event.target.name.value;
    let tagline = event.target.tagline.value;
    let first_brewed =event.target.first_brewed.value;
    let description =event.target.description.value;
    let image_url =event.target.image_url.value;
    let abv =event.target.abv.value;
    let ph =event.target.ph.value;
    const newBeer = {
      "id": id,
      "name": name,
      "tagline": tagline,
      "first_brewed": first_brewed,
      "description": description,
      "image_url": image_url,
      "abv": abv,
      "ph": ph
    }
    fetch("http://localhost:3010",
    {
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newBeer)
    }).then(()=>{
        console.log("New Beer Added")
    })
  };
    /*const submitValues=(event)=>{
      console.log("Come onnn");
        fetch("http://localhost:3010",
    {
        method:'POST',
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newBeer)
    }).then(()=>{
        console.log("New Beer Added")
    })
    console.log(event.target.elements.name)
    }*/
    return (

<div >
      <div >
        <form  onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input
          type="text"
          name="id"
          id="id"
        />
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        
       <label htmlFor="tagline">Tag Line</label>
        <input type="text" name="tagline" id="tagline" />

       <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" id="first_brewed" />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" id= "description"/>

        <label htmlFor="image_url">Image URL</label>
        <input type="text" name="image_url" id = "image_url" />

        <label htmlFor="abv">ABV</label>
        <input type="text" name="abv" id = "abv" />

        <label htmlFor="ph">Ph</label>
      <input type="text" name="ph" id="ph" />
        <button>Save</button>
      </form>
      </div>
    </div>
    )
}
export default Form;