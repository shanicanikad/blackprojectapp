import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HomePage.css";

function HomePage() {
    return (
        <div className="app">
            <div className="header">
                <h4>BLACK LIVES MATTER</h4>
            </div>
            <div className="img-container">
                <h1 className="headline">You Are Now Entering The Black Experience</h1>

                <div className='home'>
                    <Link className='mensHome' to="/menswear">
                        <button className="buttons">
                            Shop Men's
                        </button>
                    </Link>

                    <Link className='womensHome' to="/womenswear">
                        <button className="buttons">
                            Shop Women's
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
