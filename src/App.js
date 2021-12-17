import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage';
import ShopMens from './Components/ShopMens';
import ShopWomens from './Components/ShopWomens';
import CreateBrands from './Components/CreateBrands'
import ViewBrand from './Components/ViewBrand'
import Update from './Components/UpdateBrand'
import Video from './Components/Videos';


function App() {
  // In react hooks this is how we set state
  // The first agrument is the name of the state, second argument is how we manipulate that state
  // Anything passed in useState is the default value of that state
  const [shopwomen, setShopWomen] = useState([]);
  // UseEffect works similarily to componentDidMount
  useEffect(() => {
    let apiUrl = "https://sdblackproject.herokuapp.com/womenswear";
    fetch(apiUrl)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((shopwomen) => {
        console.log(shopwomen);
        setShopWomen(shopwomen);
      })
      .catch((error) => {
        console.log(error);
        console.log("uh oh");
      });
    //Empty array bracket will only run useEffect once, because we are fetching
    //Argument passed here is saying everytime our argument changes the API will be called.
  }, []);


  const [shopmen, setShopMen] = useState([]);

  useEffect(() => {
    let menapiUrl = "https://sdblackproject.herokuapp.com/menswear";
    fetch(menapiUrl)
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((shopmen) => {
        console.log(shopmen);
        setShopMen(shopmen);
      })
      .catch((error) => {
        console.log(error);
        console.log("uh oh");
      });

  }, []);

  return (
    <Switch>
      {/* It just means that whenever a route's path matches the url path, the router will render the route's component */}
      <Route
        exact path='/'
        render={() => {
          return <HomePage />
        }}
      />
      <Route
        exact
        path="/menswear"
        render={() => {
          return <ShopMens menBrands={shopmen} />;
        }}
      />

      <Route
        exact
        path="/womenswear"
        render={() => {
          return <ShopWomens womenBrands={shopwomen} />;
        }}
      />

      <Route
        // exact
        path="/create"
        render={() => {
          return <CreateBrands />;
        }}
      />

      <Route
        exact
        path="/video"
        render={() => {
          return <Video />;
        }}
      />

      <Route
        exact
        path="/updatebrand/:gender/:brand_name"
        render={() => {
          return <Update />;
        }}
      />

      <Route
        path="/:gender/brand/:brand_name"
        render={() => {
          return <ViewBrand />
        }}
      />
    </Switch>
  );
}

export default App;
