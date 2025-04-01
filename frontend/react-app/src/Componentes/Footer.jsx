function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Sobre nós</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Nossa Missão
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Política de Privacidade</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Outros Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Livro de Reclamações
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;