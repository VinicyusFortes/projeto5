import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CriarConta() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg"
      >
        <div className="card-body">
          <h2 className="text-center mb-4">Registo</h2>
          <form>
            <div className="mb-3">
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
            <div className="mb-3">
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
