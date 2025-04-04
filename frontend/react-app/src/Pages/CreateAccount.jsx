import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../Services/Services";
import FormInput from "../Components/FormInput";
import FormSelect from "../Components/FormSelect"; // Novo componente
import AuthButton from "../Components/AuthButton";
import AuthLink from "../Components/AuthLink";

function CreateAccount() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    photo: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    userType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "phone") {
      const formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length <= 9) {
        setInputs((prev) => ({
          ...prev,
          [name]: formattedValue,
        }));
      }
    } else if (name === "userType") {
      const updatedValue = value === "normal" ? "false" : "true";
      setInputs((prev) => ({
        ...prev,
        [name]: updatedValue,
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCreateUser = async (userData) => {
    if (
      userData.photo.trim() === "" ||
      userData.firstName.trim() === "" ||
      userData.lastName.trim() === "" ||
      userData.username.trim() === "" ||
      userData.password.trim() === "" ||
      userData.confirmPassword.trim() === "" ||
      userData.email.trim() === "" ||
      userData.phone.trim() === "" ||
      userData.userType.trim() === ""
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const phoneRegex = /^\d{9}$/;
    if (!phoneRegex.test(userData.phone)) {
      alert("O número de telefone deve conter exatamente 9 dígitos.");
      return;
    }

    try {
      const verificationToken = await Service.registerUser(userData);
      alert(
        "Usuário criado com sucesso. Por favor acesse o console para ativar a conta."
      );

      const verificationUrl = `http://localhost:8080/vanessa-vinicyus-proj3/rest/auth/verifyAccount?token=${verificationToken}`;
      console.log("Clique no link para ativar sua conta: ", verificationUrl);
    } catch (error) {
      alert("Erro ao criar conta");
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreateUser(inputs);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Registo</h2>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Imagem de Perfil (URL)"
              type="url"
              name="photo"
              placeholder="Cole a URL da imagem"
              value={inputs.photo}
              onChange={handleChange}
            />
            <div className="row">
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Username"
                  name="username"
                  placeholder="Digite seu username"
                  value={inputs.username}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  value={inputs.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Último Nome"
                  name="lastName"
                  placeholder="Digite seu último nome"
                  value={inputs.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Primeiro Nome"
                  name="firstName"
                  placeholder="Digite seu primeiro nome"
                  value={inputs.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Telemóvel"
                  type="tel"
                  name="phone"
                  placeholder="Digite seu número de telemóvel"
                  value={inputs.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormSelect
                  label="Tipo de Usuário"
                  name="userType"
                  value={inputs.userType}
                  onChange={handleChange}
                  options={[
                    { value: "admin", label: "Administrador" },
                    { value: "normal", label: "Normal" },
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Senha"
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <FormInput
                  label="Confirmar Senha"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  value={inputs.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <AuthButton type="submit" className="btn-primary">
                  Registrar
                </AuthButton>
              </div>
              <div className="col-md-6 mb-3">
                <AuthLink to="/login" className="btn-outline-primary w-100">
                  Login
                </AuthLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
