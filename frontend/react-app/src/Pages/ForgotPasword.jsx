import { useState } from "react";
import FormInput from "../Components/FormInput";
import AuthLayout from "../Components/AuthLayout";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para recuperar senha (pode ser API ou alert)
    console.log("Solicitação de redefinição para:", username);
    alert("Se este usuário existir, enviaremos um link para redefinição.");
  };

  return (
    <AuthLayout title="Esqueceu sua senha?">
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Usuário ou E-mail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100 mb-3">
          Enviar link de redefinição
        </button>
        <div className="text-center">
          <Link to="/login">Voltar ao login</Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
