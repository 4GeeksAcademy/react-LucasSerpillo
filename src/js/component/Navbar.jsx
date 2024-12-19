import React from "react";

const Navbar = () =>{

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <div className="container-fluid">
    <a class="navbar-brand" href="#">Moda animal</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Service</a>
        <a class="nav-link" aria-disabled="true">Contact</a>
      </div>
    </div>
  </div>
</nav>
  );


};

export default Navbar;