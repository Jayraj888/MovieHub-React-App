import React from "react";

const Sidebar = (props) => {
  // Define colors based on Light/Dark mode
  const isLight = props.mode === "light";
  const cardBg = isLight ? "white" : "#0d253f";
  const textColor = isLight ? "dark" : "white";

  return (
    <div className="col-lg-3 d-none d-lg-block">
      <div
        style={{
          top: "100px",
          zIndex: 10,
          padding: "0 5%",
        }}
      >
        {/* Sort Section */}
        <div>
          <h2 className="mb-4">Sidebar</h2>
        </div>
        <div
          className={`card shadow-sm border rounded-3 mb-3 bg-${isLight ? "white" : ""}`}
          style={{ backgroundColor: cardBg }}
        >
          <div
            className={`card-header bg-transparent fw-bold d-flex justify-content-between align-items-center py-3 border-0 text-${textColor}`}
          >
            Sort <i className="fa-solid fa-chevron-right small opacity-50"></i>
          </div>
        </div>

        {/* Filters Section */}
        <div
          className={`card shadow-sm border rounded-3 bg-${isLight ? "white" : ""}`}
          style={{ backgroundColor: cardBg }}
        >
          <div
            className={`card-header bg-transparent fw-bold d-flex justify-content-between align-items-center py-3 text-${textColor}`}
          >
            Filters{" "}
            <i className="fa-solid fa-chevron-down small opacity-50"></i>
          </div>
          <div className={`card-body text-${textColor}`}>
            <p
              className="small fw-bold opacity-75 text-uppercase mb-3"
              style={{ fontSize: "0.75rem" }}
            >
              Genres
            </p>
            <div className="d-flex flex-wrap gap-2">
              {["Action", "Comedy", "Horror", "Drama", "Sci-Fi"].map((g) => (
                <span
                  key={g}
                  className={`badge rounded-pill border px-3 py-2 fw-normal text-${textColor}`}
                  style={{
                    cursor: "pointer",
                    borderColor: isLight ? "#ced4da" : "#1e3a5a",
                  }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Search Button */}
        <button
          className="btn w-100 mt-3 rounded-pill fw-bold text-white shadow-sm py-2"
          style={{
            background: "linear-gradient(to right, #01b4e4, #90cea1)",
            border: "none",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
