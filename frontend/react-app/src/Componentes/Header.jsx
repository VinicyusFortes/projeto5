import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; 

const Header = () => {
  return (
    <header className="bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/" className="logo">
          <img
            src="https://via.placeholder.com/150" //FIX ME: Substitua pela URL da sua imagem
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </a>
        <div className="d-flex align-items-center">
          <a href="#" className="icone text-dark me-3">
            <i class="fa-solid fa-message"></i>
          </a>
          <a href="#" className="icone text-dark me-3">
            <i class="fa-solid fa-bell"></i>
          </a>
          <a href="#" className="icone text-dark me-3">
            <i class="fa-solid fa-user"></i>
          </a>
          <a href="#" className="icone text-dark me-3">
            <i class="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
