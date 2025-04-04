function LanguageDropDownMenu({
  showLanguageMenu,
  toggleLanguageMenu,
  handleLanguageChange,
}) {
  return (
    <>
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
    </>
  );
}

export default LanguageDropDownMenu;