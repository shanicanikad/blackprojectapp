import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="app">
            <div className="header">
                <h4>BLACK LIVES MATTER</h4>
            </div>
            <div className="img-container">
                <h1 className="headline">You Are Now Entering The Black Experience</h1>
                <div>
                    <button>
                        <Link to="/menswear">
                            Shop Men's
                        </Link>
                    </button>
                    <button>
                        <Link to="/womenswear">
                            Shop Women's
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
