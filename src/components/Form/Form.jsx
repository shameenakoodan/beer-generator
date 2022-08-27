import { useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import whiteCross from "../../assets/images/white-cross.png"
import FormInput from "../FormInput/FormInput";
const Form=(props)=>{
  const {togglePopUp} = props;
   // const [newBeer,setNewBeer] =useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    let id = event.target.id.value;
    let name = event.target.name.value;
    console.log(`id = ${id}`);
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
    togglePopUp();
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

<div className="form-menu">
      <div className="form-menu__content">
      <img
          src={whiteCross}
          alt="Close menu"
          className="form-menu__cross"
          onClick={togglePopUp}
        />
        <form  onSubmit={handleSubmit} className="form-menu__form">
        <label>Enter Beer Details</label>
        <FormInput title={"ID"} id={"id"}/>
        <FormInput title={"name"} id={"name"} />
        <FormInput title = {"tagline"} id={"tagline"}/>
        <FormInput title={"First Brewed"} id={"first_brewed"}/>
        <FormInput title={"Description"} id={"description"} />
        <FormInput title = {"Image"} id={"image_url"}/>
        <FormInput title = {"ABV"} id={"abv"}/>
        <FormInput title = {"PH"} id={"ph"}/>
        {/*<input
          type="text"
          name="id"
          id="id"
          className="form-menu__input"
    />*/}
       {/*} <label htmlFor="name">Name</label>*/}
       {/*<Label title={"Name"} />
        <input type="text" name="name" id="name" className="form-menu__input" />
        
       <label htmlFor="tagline">Tag Line</label>
        <input type="text" name="tagline" id="tagline" className="form-menu__input" />

       <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name="first_brewed" id="first_brewed" className="form-menu__input" />

        <label htmlFor="description">Description</label>
        <input type="text" name="description" id= "description" className="form-menu__input" />

        <label htmlFor="image_url">Image URL</label>
        <input type="text" name="image_url" id = "image_url" className="form-menu__input"  />

        <label htmlFor="abv">ABV</label>
        <input type="text" name="abv" id = "abv" className="form-menu__input"  />

        <label htmlFor="ph">Ph</label>
      <input type="text" name="ph" id="ph" className="form-menu__input"/>*/}
        <Button title="Save Beer" />
      </form>
      </div>
    </div>
    )
}
export default Form;