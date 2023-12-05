import React from "react";

function Cards({ title, img, text }) {
  return (
    <>
      <div className="card my-2 custom-card">
        <div className="d-flex justify-content-start align-items-center flex-column card-body op-1 bg-Primary-Darker rounded">
          <h5 className="card-title text-center text-Primary-Lightest fs-2 fw-bold">
            {title ? title : "Title"}
          </h5>
          {console.log(img)}
          <img
            src={img ? img : "/Logo.png"}
            className="my-2 img-fluid rounded-circle h w-50"
          />
          <p className="card-text text-wrap text-center">
            <span className="text-Primary-Lightest fst-italic ">
                {text ? text : "Text"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Cards;
