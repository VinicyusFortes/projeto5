import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; 
import "../Pages/style.css";

const Header = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("pt");

  // Função para alternar a visibilidade do menu de idiomas
  const toggleLanguageMenu = () => {
    setShowLanguageMenu(!showLanguageMenu);
  };

  // Função para mudar o idioma
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Aqui você pode adicionar lógica para mudar o idioma da aplicação
    console.log("Idioma selecionado:", language);
    setShowLanguageMenu(false); // Fechar o menu depois de selecionar
  };

  return (
    <header className="bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/home" className="logo">
          <img
            src="https://emilyroachwellness.com/wp-content/uploads/2012/11/242Reuse00.jpg"
            alt="Logo"
            className="img-fluid"
            style={{ maxHeight: "50px" }}
          />
        </a>
        <div className="d-flex align-items-center">
          <a href="/perfil">
            <img
              className="imagem-perfil-header"
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
              alt="imagem de perfil"
            />
          </a>
          <p className="m-4">
            Bem vindo,{" "}
            <a href="/perfil">
              <span className="text-success">user</span>
            </a>
          </p>
          <a href="/perfil" className="icone text-dark me-3">
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

          <span onClick={toggleLanguageMenu} className="pointer">
            <span className="m-1 icone text-dark me-3">Idioma</span>
            <i class="fa-solid fa-globe"></i>
          </span>

          {/* Menu suspenso para seleção de idioma */}
          {showLanguageMenu && (
            <div
              className="dropdown-menu show position-absolute"
              style={{ top: "50px", right: "20px" }}
            >
              <button
                className="dropdown-item"
                onClick={() => handleLanguageChange("pt")}
              >
                Português
              </button>
              <button
                className="dropdown-item"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
