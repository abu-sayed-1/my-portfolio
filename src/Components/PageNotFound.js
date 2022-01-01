import React from "react";
import { Link } from "react-router-dom";
import notFound from "./images/pageNotFound.png";

const PageNotFound = () => {

  document.title = "Page Not Found";

  const notFoundStyle = {
    backgroundColor: "white",
    border: "2px solid #4e4ef8",
  };
  return (
    <div sm={6} className="d-flex justify-content-center">
      <div>
        <img fluid src={notFound} alt="Page Not Found" />
        <Link to="/" className="d-flex justify-content-center" style={{textDecoration: 'none'}}>
          <button style={notFoundStyle} type="button" className="button">
            home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
