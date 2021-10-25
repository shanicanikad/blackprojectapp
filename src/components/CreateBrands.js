import React, { useState } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import { useHistory } from "react-router-dom";

function CreateBrand() {
  const [logo, setLogo] = useState();
  const [brand_name, setBrand_Name] = useState();
  const [CEO, setCEO] = useState();
  const [type, setType] = useState();
  const [price_point, setPrice_Point] = useState();
  const [link, setLink] = useState();
  const [gender, setGender] = useState();
  const history = useHistory();

  console.log(`${gender} ${gender == "Men's"} `);
  const submitToApi = () => {
    let apiLink;

    if (gender == "Men's") {
      apiLink = "https://sdblackproject.herokuapp.com/menswear/";
    } else {
      apiLink = "https://sdblackproject.herokuapp.com/womenswear/";
    }

    axios
      .post(apiLink, {
        logo,
        brand_name,
        CEO,
        type,
        price_point,
        link,
      })
      .then(function (response) {
        alert("Thanks for adding to our libary.");
        console.log(response);
        let shopBrand;
        if (gender == "Men's") {
          shopBrand = "menswear";
        } else {
          shopBrand = "womenswear";
        }
        window.location.href = `https://shanicanikad.github.io/${shopBrand}`;
      });
  };

  return (
    <div>
      <Nav />
      <form>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Select Category</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
            style={{
              backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                marginTop: '10px',
                fontSize: 'medium'
            }}
          >
            <option></option>
            <option>Men's</option>
            <option>Women's</option>
          </select>
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Logo</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setLogo(event.target.value)}
            style={{
              backgroundColor: "black",
              color: "#bc925a",
              borderColor: "#bc925a",
              border: '1px solid #bc925a',
              borderRadius: '5px',
              width: '100%',
              padding: '15px',
              marginTop: '10px',
              fontSize: 'medium'
            }}
          />
          <small style={{color: 'gray'}} id="emailHelp" className="form-text text-muted">
            Please paste link to brand jpeg/png
          </small>
        </div>

        <div style={{paddingTop: '10px'}} className="form-group">
          <label for="exampleInputEmail1">Brand Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setBrand_Name(event.target.value)}
            style={{
              backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                marginTop: '0px',
                fontSize: 'medium'
            }}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">CEO</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setCEO(event.target.value)}
            style={{
              backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                marginTop: '10px',
                fontSize: 'medium'
            }}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleFormControlSelect1">Type</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            onChange={(event) => setType(event.target.value)}
            style={{
              backgroundColor: "black",
              color: "#bc925a",
              borderColor: "#bc925a",
              border: '1px solid #bc925a',
              borderRadius: '5px',
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              marginTop: '10px',
              fontSize: 'medium'
            }}
          >
            <option></option>
            <option>High Fashion/Luxury</option>
            <option>Streetwear</option>
          </select>
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Price Point</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setPrice_Point(event.target.value)}
            style={{
              backgroundColor: "black",
              color: "#bc925a",
              borderColor: "#bc925a",
              border: '1px solid #bc925a',
              borderRadius: '5px',
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              marginTop: '10px',
              fontSize: 'medium'
            }}
          />
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Link</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setLink(event.target.value)}
            style={{
              backgroundColor: "black",
              color: "#bc925a",
              borderColor: "#bc925a",
              border: '1px solid #bc925a',
              borderRadius: '5px',
              width: '100%',
              padding: '15px',
              marginTop: '10px',
              fontSize: 'medium',
            }}
          />

          <small style={{color: 'gray'}} id="emailHelp" className="form-text text-muted">
            Insert link to brand website
          </small>
        </div>

        <div style={{marginTop: '50px'}} className="forms">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Add brand
          </label>
        </div>
        <button
          type="button"
          className="btn"
          onClick={() => submitToApi()}

        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBrand;
