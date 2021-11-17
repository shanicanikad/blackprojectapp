import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import '../Styles/UpdateBrand.css'

function UpdateBrands() {
  const [logo, setLogo] = useState();
  const [brand_name, setBrand_Name] = useState();
  const [CEO, setCEO] = useState();
  const [type, setType] = useState();
  const [price_point, setPrice_Point] = useState();
  const [link, setLink] = useState();
  const params = useParams();
  

  useEffect(() => {
    let apiLink;
    if (params.gender === "menswear") {
      apiLink = `https://sd-womens-fashion.herokuapp.com/menswear/${params.brand_name}`;
    } else {
      apiLink = `https://sd-womens-fashion.herokuapp.com/WomenFashion/${params.brand_name}`;
    }

    fetch(apiLink)
      .then((data) => {
        let test = data.json();
        console.log(test);
        return test;
      })
      .then((Brand) => {
        if (Brand) {
          console.log(Brand);
          setLogo(Brand.logo);
          setBrand_Name(Brand.brand_name);
          setCEO(Brand.CEO);
          setType(Brand.type);
          setPrice_Point(Brand.price_point);
          setLink(Brand.link);
        }
      });
    //Passing params in brackets will cause function to run again when any of the values of the array changes.
  }, []);
  const submitToApi = () => {
    let apiLink;
    if (params.gender == "menswear") {
      apiLink = `https://sd-womens-fashion.herokuapp.com/menswear/${params.brand_name}`;
    } else {
      apiLink = `https://sd-womens-fashion.herokuapp.com/WomenFashion/brand_name/${params.brand_name}`;
    }
    console.log("update", params.artistName);
    axios
      .put(apiLink, {
        logo,
        brand_name,
        CEO,
        type,
        price_point,
        link,
      })
      .then(function (response) {
        if (response.status == 200) {
          // change when deploying
          window.location.href = `https://blackfashionproject.netlify.app/${
            params.gender == "menswear" ? "menswear" : "womenswear"
          }`;
        }
        // alert("Thanks for updating to our libary.");
        console.log(response);
      });
  };
  return (
    <div>
      <div>
        <Nav />
      </div>
      {/* // Make app so that user needs to enter brand name to submit */}
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Logo</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={logo}
              onChange={(event) => setLogo(event.target.value)}
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
            <label for="exampleInputEmail1">Brand Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={brand_name}
              onChange={(event) => setBrand_Name(event.target.value)}
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                marginTop: '10px',
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
              value={CEO}
              onChange={(event) => setCEO(event.target.value)}
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                marginTop: '10px',
                fontSize: 'medium'
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Type</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={type}
              onChange={(event) => setType(event.target.value)}
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                marginTop: '10px',
                fontSize: 'medium'
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Price Point</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={price_point}
              onChange={(event) => setPrice_Point(event.target.value)}
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
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
              value={link}
              onChange={(event) => setLink(event.target.value)}
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
                border: '1px solid #bc925a',
                borderRadius: '5px',
                width: '100%',
                padding: '10px',
                marginBottom: '50px',
                marginTop: '10px',
                fontSize: 'medium'
              }}
            />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>

          
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              style={{
                backgroundColor: "black",
                color: "#bc925a",
                borderColor: "#bc925a",
              }}
            />
            <label className="form-check-label" for="exampleCheck1">
              Update Brand
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
    </div>
  );
}
export default UpdateBrands;
