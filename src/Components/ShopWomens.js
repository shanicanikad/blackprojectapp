import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Subscribe from './Subscribe'
import axios from 'axios'
import '../Styles/ShopWomens.css'


function ShopWomens(props) {
    let history = useHistory();
    let remove = (brand_name) => {
        let encodedbrand_name = encodeURI(brand_name);
        axios
            .delete(
                `https://sdblackproject.herokuapp.com/womenswear/${encodedbrand_name}`,
                {
                    brand_name,
                }
            )
            .then(function (response) {
                alert("This Brand has been deleted!")
            })
    }

    let BrandList = props.womenBrands.map((brand, i) => {
        let encodedbrand_name = encodeURI(brand.brand_name)


        return (
            <div className="cards">
                <div className="cards-grid"  key={i}>
                    <Link to={`/women/brand/${encodedbrand_name}`}>
                        <img
                            src={brand.logo}
                            className="img-fluid"
                            alt="Responsive image"
                        />
                    </Link>
                    <p><a href={brand.link} className= 'website'>{brand.link}</a></p>

                    <div className="cardFooter" style={{ backgroundColor: "#020202" }}>
                        <Link className='update' to={`/updatebrand/womenswear/${encodeURI(brand.brand_name)}`}
                        >
                            Update
                        </Link>


                        <a className="delete" onClick={() => remove(brand.brand_name)}>
                            Delete
                        </a>

                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
            <Nav />
            <div className="box-grid">{BrandList}</div>
            <footer>
                <Subscribe />
            </footer>
        </div>
    );
}

export default ShopWomens