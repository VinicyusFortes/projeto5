import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CriarConta() {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Registo</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Imagem de Perfil (URL)
              </label>
              <input
                type="url"
                className="form-control"
                id="profileImage"
                placeholder="Cole a URL da imagem"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Digite seu username"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName" className="form-label">
                  Último Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Digite seu último nome"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName" className="form-label">
                  Primeiro Nome
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Digite seu primeiro nome"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">
                  Telemóvel
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Digite seu número de telemóvel"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userType" className="form-label">
                  Tipo de Usuário
                </label>
                <select className="form-select" id="userType" required>
                  <option value="">Selecione...</option>
                  <option value="admin">Administrador</option>
                  <option value="normal">Normal</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CriarConta;
