import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Service } from "../Services/Services";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

 const [inputs, setInputs] = useState({
   username: "",
   password: "",
 });

 const handleChange = (event) => {
   const { name, value } = event.target;
   setInputs((prevState) => ({
     ...prevState,
     [name]: value,
   }));
 };

 const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("username: ", inputs.username);
  console.log("password: ", inputs.password);
  try {
    const token = await Service.loginUser(inputs.username, inputs.password);
    sessionStorage.setItem("token", token);

    alert("login feito com sucesso!");
    navigate("/home");


  } catch(error) {
    alert(error.message);
    setInputs({username: "", password: ""});
  }  
 }

  return (
    <div className="d-flex flex-column mt-5 mb-5">
      <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card shadow-lg flex-grow-1">
          <div className="card-body">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    placeholder="Digite seu username"
                    value={inputs.username}
                    onChange={handleChange}
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
                    name="password"
                    id="password"
                    placeholder="Digite sua senha"
                    value={inputs.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row d-flex center justify-content-center mt-3">
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-auto"
                  >
                    Login
                  </button>
                </div>

                <div className="col-4">
                  <a
                    href="/create-account"
                    className="btn btn-outline-primary w-100 mt-auto"
                  >
                    Registar
                  </a>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-4">
                  <div className="mt-2">
                    <p>
                      <a href="/">Esqueceu sua senha?</a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
