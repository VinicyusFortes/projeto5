function HeaderIcons({ toggleLanguageMenu }) {
  return (
    <>
      <div className="d-flex align-items-center flex-wrap">
        <a href="/perfil" className="me-3">
          <img
            className="imagem-perfil-header"
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
            alt="imagem de perfil"
          />
        </a>

        <a href="/perfil" className="icone text-dark d-none d-sm-flex me-3">
          <span className="m-1">Conta</span>
          <i className="fa-solid fa-user"></i>
        </a>
        <a href="#" className="icone text-dark d-none d-sm-flex me-3">
          <span className="m-1">Chat</span>
          <i className="fa-solid fa-message"></i>
        </a>
        <a href="#" className="icone text-dark d-none d-sm-flex me-3">
          <span className="m-1">Notificações</span>
          <i className="fa-solid fa-bell"></i>
        </a>

        {/* Ícone de idioma */}
        <span onClick={toggleLanguageMenu} className="pointer d-none d-sm-flex">
          <span className="m-1 icone text-dark me-3">Idioma</span>
          <i className="fa-solid fa-globe"></i>
        </span>

        {/* A versão para telas menores (tablets e celulares) */}
        <div className="d-flex d-sm-none">
          <span onClick={toggleLanguageMenu} className="pointer">
            <i className="fa-solid fa-globe"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default HeaderIcons;
