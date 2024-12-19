import React from "react";

const Jumbotron  = () =>{
    return(
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4" >
            <div className=" py-5 text-start  ">
                <h1 className="display-5 fw-bold">Bienvenidos a lo ultimo en moda animal !</h1>
                <p className="col-md-8 fs-4">
                ¡Bienvenidos a la tienda donde tus mascotas marcan tendencia! Aquí encontrarán todo lo necesario para que sus looks sean tan geniales como ellos. Porque, claro, hasta los animales merecen estar a la moda. ¡Que no pase de moda tu gato!
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Pide tu presupuesto
                </button>
            </div>
        </div>
    )
}

export default Jumbotron;