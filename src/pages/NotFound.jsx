// NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center justify-content-center" style={{margin:"10%"}}>
      <div
        className="text-center p-4 rounded shadow"
        role="alert"
        aria-labelledby="notfound-title"
      >
        <div className="mb-3">
          
          <svg
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 15h2v2h-2z" fill="#f05a28" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              fill="#f05a28"
            />
            <path
              d="M11 6h2v7h-2z"
              fill="#f05a28"
            />
          </svg>
        </div>

        <h1 id="notfound-title" className="display-6 fw-bold text-dark mb-2">
          404 — Page not found
        </h1>
        <p className="text-muted mb-3">
          The page you're looking for doesn't exist or has been moved. Check the URL or go back to the homepage.
        </p>

        <div className="d-flex justify-content-center gap-2">
          <Link to="/" className="btn btn-dark btn-lg">
            Go to Home
          </Link>

          <button
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        <div className="mt-4 text-muted small">
          If you think this is an error, open an issue or contact the site administrator.
        </div>
      </div>
    </div>
  );
};

export default NotFound;
