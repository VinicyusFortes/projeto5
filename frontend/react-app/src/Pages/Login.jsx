import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Service } from "../Services/Services";
import FormInput from "../Components/FormInput";
import AuthLayout from "../Components/AuthLayout";


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
    try {
      const token = await Service.loginUser(inputs.username, inputs.password);
      sessionStorage.setItem("token", token);
      alert("Login feito com sucesso!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
      setInputs({ username: "", password: "" });
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Username"
          name="username"
          placeholder="Digite seu username"
          value={inputs.username}
          onChange={handleChange}
        />

        <FormInput
          label="Senha"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={inputs.password}
          onChange={handleChange}
        />

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-4 mb-2">
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </div>
          <div className="col-4 mb-2">
            <a href="/create-account" className="btn btn-outline-primary w-100">
              Registar
            </a>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-6 text-center">
            <a href="/esqueceu-senha">Esqueceu sua senha?</a>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
