import React from "react";

const Cards = (props) => {
  return(
  <div className="container my-5 px-5">
    <div className="card ">
          <img src={props.image} className="card-img-top" alt={props.title} />
          <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.descripcion}</p>
              <a href="#" className="btn btn-primary">Find out more !</a>
          </div>
      </div>
</div>
  );
}

export default Cards;

