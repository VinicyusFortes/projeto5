function Perfil(){
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Card de Perfil */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card text-center shadow-lg">
            <div className="card-body">
              <img
                src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001884.png"
                alt="User"
                className="rounded-circle img-fluid mb-3"
                style={{ width: "150px", height: "150px" }}
              />
              <h5 className="card-title">João Silva</h5>
              <p className="card-text text-muted">@joaosilva</p>
              <p>
                <strong>Email:</strong> joao@email.com
              </p>
              <p>
                <strong>Telefone:</strong> +55 11 99999-9999
              </p>
              <p>
                <strong>Estado da Conta:</strong>
                <span className="badge bg-success ms-2">Ativa</span>
              </p>
            </div>
          </div>
        </div>

        {/* Área de Opções da Conta */}
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4 mt-md-0">
          <div className="card shadow-lg">
            <div className="card-body">
              <h5 className="card-title text-center">Opções da Conta</h5>
              <div className="d-grid gap-3 mt-4">
                <button className="btn btn-primary">
                  <i className="fa fa-edit me-2"></i> Editar Perfil
                </button>
                <button className="btn btn-secondary">
                  <i className="fa fa-box me-2"></i> Meus Produtos
                </button>
                <button className="btn btn-warning">
                  <i className="fa fa-ban me-2"></i> Inativar Conta
                </button>
                <button className="btn btn-success">
                  <i className="fa fa-check-circle me-2"></i> Reativar Conta
                </button>
                <button className="btn btn-danger">
                  <i className="fa fa-user-times me-2"></i> Deletar Usuário
                </button>
                <button className="btn btn-info text-white">
                  <i className="fa fa-users me-2"></i> Editar Usuários
                </button>
                <button className="btn btn-dark">
                  <i className="fa fa-pencil-alt me-2"></i> Produtos Modificados
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fa fa-trash me-2"></i> Deletar Todos os Produtos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;