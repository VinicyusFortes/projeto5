import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; 
import "../Pages/style.css";

const Header = () => {
  return (
    <header className="bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/index" className="logo">
          <img
            src="https://emilyroachwellness.com/wp-content/uploads/2012/11/242Reuse00.jpg" 
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </a>
        <div className="d-flex align-items-center">
          <a href="#">
            <img
              className="imagem-perfil-header"
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
              alt="imagem de perfil"
            />
          </a>
          <p className="m-4">
            Bem vindo, <a href="#"><span className="text-success">user</span></a>
          </p>
          <a href="#" className="icone text-dark me-3">
            <span className="m-1">Conta</span>
            <i class="fa-solid fa-user"></i>
          </a>
          <a href="#" className="icone text-dark me-3">
            <span className="m-1">Chat</span>
            <i class="fa-solid fa-message"></i>
          </a>
          <a href="#" className="icone text-dark me-3">
            <span className="m-1">Notificações</span>
            <i class="fa-solid fa-bell"></i>
          </a>

          <a href="#" className="icone text-dark me-3">
            <span className="m-1">Idioma</span>
            <i class="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
