import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Service } from "../Services/Services";
import FormInput from "../Components/FormInput";
import AuthLayout from "../Components/AuthLayout";
import AuthButton from "../Components/AuthButton";
import AuthLink from "../Components/AuthLink";
import AuthTextLink from "../Components/AuthTextLink";


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
            <AuthButton type="submit" className="btn-primary">
              Login
            </AuthButton>
          </div>
          <div className="col-4 mb-2">
            <AuthLink to="/create-account" className={"btn-outline-primary w-100"}>
              Registar
            </AuthLink>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-6">
            <AuthTextLink to="/forgot-password">
              Esqueceu sua senha?
            </AuthTextLink>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
