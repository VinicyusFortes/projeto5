function HeaderIcons({toggleLanguageMenu}) {
  return (
    <>
      <div className="d-flex align-items-center">
        <a href="/perfil">
          <img
            className="imagem-perfil-header"
            src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
            alt="imagem de perfil"
          />
        </a>
        <a href="/perfil" className="icone text-dark me-3">
          <span className="m-1">Conta</span>
          <i className="fa-solid fa-user"></i>
        </a>
        <a href="#" className="icone text-dark me-3">
          <span className="m-1">Chat</span>
          <i className="fa-solid fa-message"></i>
        </a>
        <a href="#" className="icone text-dark me-3">
          <span className="m-1">Notificações</span>
          <i className="fa-solid fa-bell"></i>
        </a>

        <span onClick={toggleLanguageMenu} className="pointer">
          <span className="m-1 icone text-dark me-3">Idioma</span>
          <i class="fa-solid fa-globe"></i>
        </span>
      </div>
    </>
  );
}

export default HeaderIcons;