import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Nav from './Nav'
import Subscribe from './Subscribe'
import axios from 'axios'
import '../Styles/ShopMens.css'


function ShopMens(props) {
    let history = useHistory();
    let remove = (brand_name) => {
        let encodedbrand_name = encodeURI(brand_name);
        axios
            .delete(
                `https://sdblackproject.herokuapp.com/menswear/${encodedbrand_name}`,
                {
                    brand_name,
                }
            )
            .then(function (respone) {
                alert("This Brand has been deleted!")
            })
    }

    let BrandList = props.menBrands.map((brand, i) => {
        let encodedbrand_name = encodeURI(brand.brand_name)


        return (
            <div className="cards">
                <div className="cards-grid" key={i}>
                    <Link to={`/men/brand/${encodedbrand_name}`}>
                        <img
                            src={brand.logo}
                            className="imgs"
                            alt="Responsive image"
                        />
                    </Link>
                    <p><a href={brand.link} className= 'website'>{brand.link}</a></p>


                    <div className="cardFooter">
                        <Link className= 'update' to={`/updatebrand/menswear/${encodeURI(brand.brand_name)}`}
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
            <div className='box-grid'>{BrandList}</div>
            <footer>
                <Subscribe />
            </footer>
        </div>
    );
}

export default ShopMens