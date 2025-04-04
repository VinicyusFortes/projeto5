import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css"; 
import "../Pages/style.css";
import Logo from "./Logo";
import HeaderProfileText from "./HeaderProfileText";
import HeaderIcons from "./HeaderIcons";
import LanguageDropDownMenu from "./LanguageDropDown";

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
        <Logo />
        <HeaderProfileText />
        <HeaderIcons toggleLanguageMenu={toggleLanguageMenu} />
        <LanguageDropDownMenu
          showLanguageMenu={showLanguageMenu}
          toggleLanguageMenu={toggleLanguageMenu}
          handleLanguageChange={handleLanguageChange}
        />
      </div>
    </header>
  );
};

export default Header;
