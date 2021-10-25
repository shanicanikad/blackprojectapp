import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import { useParams } from "react-router-dom";
import "../Styles/ViewBrand.css"

function ViewBrand() {
  const [brand, setBrand] = useState();
  const params = useParams();
  useEffect(() => {
    console.log(`${params.gender}`);
    let apiLink;
    if (params.gender == "men") {
      apiLink = `https://sdblackproject.herokuapp.com/menswear/${params.brand_name}`;
    } else {
      apiLink = `https://sdblackproject.herokuapp.com/womenswear/${params.brand_name}`;
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
          setBrand(Brand);
        }
      });
    //Passing params in bracket will cause function to run again when any of the values of the array changes.
  }, []);
  if (brand == null) {
    return <span>loading</span>;
  }

  let CategoryList = brand.categories.map((categoryObject, i) => {
    let category = categoryObject.category;
    let products = categoryObject.products;

    let ProductList = products.map((product, a) => {
      // Each product as a card
      return (
        <div class="boxy">
          <div class="card" key={i}>
            <img src={product.image_url} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{product.name}</h5>
              <p class="card-text">{product.details}</p>
            </div>
          </div>
        </div>
      );
    });

    // each category with it's ProductList
    return (
      <div>
        <h3>{category}</h3>
        <div className="card-deck">{ProductList}</div>
      </div>
    );
  });

  return (
    <div>
      <div>
        <Nav />
        <div className="viewBrand">
          <h1>{brand.brand_name}</h1>
          {CategoryList}
        </div>
      </div>
    </div>
  );
}
export default ViewBrand;
