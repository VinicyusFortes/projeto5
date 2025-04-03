import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Service } from "../Services/Services";

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
      // Permite apenas números e limita a 9 caracteres
      const formattedValue = value.replace(/\D/g, ""); // Remove qualquer caractere não numérico
      if (formattedValue.length <= 9) {
        setInputs((prev) => ({
          ...prev,
          [name]: formattedValue,
        }));
      }
    } else if (name === "userType") {
      // Lógica para alterar o valor do 'userType' para "true" ou "false"
      const updatedValue = value === "normal" ? "false" : "true"; // Se for "normal", passa "false"; caso contrário, passa "true"
      console.log("Valor do tipo de usuário selecionado:", updatedValue); // Exibe no console o valor selecionado

      setInputs((prev) => ({
        ...prev,
        [name]: updatedValue, // Atualiza o valor de userType com "false" ou "true"
      }));
    } else {
      setInputs((prev) => ({
        ...prev,
        [name]: value, // Atualiza os outros campos normalmente
      }));
    }
  };


   const handleCreateUser = async (userData) => {
     // Verifica se todos os campos obrigatórios estão preenchidos
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
       alert("Todos os campos são obrigaórios!");
       return;
     }

     // Verifica se as senhas coincidem
     if (userData.password !== userData.confirmPassword) {
       alert("As senhas não coincidem!");
       return;
     }

     //verificao do campo do telefone
     const phoneRegex = /^\d{9}$/;

     if (!phoneRegex.test(userData.phone)) {
       alert("O número de telefone deve conter exatamente 9 dígitos.");
       return;
     }

     try {
       const verificationToken = await Service.registerUser(userData);

       alert(
         "User criado com sucesso. Por favor acesse o console para ativar conta."
       );

       // Cria a URL de verificação
       const verificationUrl = `http://localhost:8080/vanessa-vinicyus-proj3/rest/users/verifyAccount?token=${verificationToken}`;

       // Exibe o link no console
       console.log("Clique no link para ativar sua conta: ", verificationUrl);
     } catch (error) {
       alert("erro ao criar conta");
       console.error(error);
     }
   };

   const handleSubmit = (event) => {
     event.preventDefault();
     handleCreateUser(inputs);
   };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Registo</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Imagem de Perfil (URL)
              </label>
              <input
                type="url"
                className="form-control"
                id="profileImage"
                name="photo"
                placeholder="Cole a URL da imagem"
                required
                value={inputs.photo}
                onChange={handleChange}
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
                  name="username"
                  placeholder="Digite seu username"
                  required
                  value={inputs.username}
                  onChange={handleChange}
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
                  name="email"
                  placeholder="Digite seu email"
                  required
                  value={inputs.email}
                  onChange={handleChange}
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
                  name="lastName"
                  placeholder="Digite seu último nome"
                  required
                  value={inputs.lastName}
                  onChange={handleChange}
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
                  name="firstName"
                  placeholder="Digite seu primeiro nome"
                  required
                  value={inputs.firstName}
                  onChange={handleChange}
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
                  name="phone"
                  placeholder="Digite seu número de telemóvel"
                  required
                  value={inputs.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userType" className="form-label">
                  Tipo de Usuário
                </label>
                <select
                  className="form-select"
                  id="userType"
                  name="userType"
                  value={inputs.userType === "false" ? "normal" : "admin"}
                  onChange={handleChange}
                  required
                >
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
                  name="password"
                  placeholder="Digite sua senha"
                  required
                  value={inputs.password}
                  onChange={handleChange}
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
                  name="confirmPassword"
                  placeholder="Confirme sua senha"
                  required
                  value={inputs.confirmPassword}
                  onChange={handleChange}
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
export default CreateAccount;
