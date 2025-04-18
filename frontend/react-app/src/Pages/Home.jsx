import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Home() {
  return (
    <div className="container mt-5">
      {/* Barra de Pesquisa */}
      <div className="row mb-4 d-flex justify-content-center">
        <div className="col-8">
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar produtos..."
            />
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* Categorias */}
        <div className="col-md-3 mb-4">
          <h5>Categorias</h5>
          <ul className="list-group">
            <li className="list-group-item">Categoria 1</li>
            <li className="list-group-item">Categoria 2</li>
          </ul>
        </div>

        {/* Produtos */}
        <div className="col-md-9">
          <h5>Últimos Produtos Registados</h5>
          <div className="row">
            {/* Exemplo de um card de produto */}
            <div className="col-md-4 mb-4">
              <a href="#">
                <div className="card h-100">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Imagem do produto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Nome do Produto</h5>
                    <p className="card-text">R$ 100,00</p>
                  </div>
                </div>
              </a>
            </div>
            {/* Exemplo de mais cards de produtos */}
            <div className="col-md-4 mb-4">
              <a href="">
                <div className="card h-100">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Imagem do produto"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Nome do Produto 2</h5>
                    <p className="card-text">R$ 200,00</p>
                  </div>
                </div>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
