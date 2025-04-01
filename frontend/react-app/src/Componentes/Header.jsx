import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; // Importando Font Awesome

const Header = () => {
  return (
    <header className="bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo - Imagem clicável */}
        <a href="/" className="logo">
          <img
            src="https://via.placeholder.com/150" // Substitua pela URL da sua imagem
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </a>

        {/* Ícones */}
        <div className="d-flex align-items-center">
          {/* Ícone de Chat */}
          <a href="#" className="text-dark me-3">
            <i class="fa-solid fa-message"></i>
          </a>

          {/* Ícone de Notificações */}
          <a href="#" className="text-dark me-3">
            <i class="fa-solid fa-bell"></i>
          </a>

          {/* Ícone de Perfil com o novo ícone "fa-user-tie" */}
          <a href="#" className="text-dark">
            <i class="fa-solid fa-user"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
