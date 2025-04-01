import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="d-flex flex-column mt-5 mb-5">
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card shadow-lg flex-grow-1">
          <div className="card-body">
            <h2 className="text-center mb-4">Login</h2>
            <form>
              <div className="row">
                <div className="col-md-12 mb-3">
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

                <div className="col-md-12 mb-3">
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
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-auto">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
