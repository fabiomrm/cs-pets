import { SignupContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { api } from "../../../../services/api";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";



interface EmailFormData {
  email: string;
}

export function Signup() {

  const navigate = useNavigate();
  const { saveUserData } = useAuth();

  const { handleSubmit, register, formState: { isSubmitting }, reset } = useForm<EmailFormData>()

  async function handleRegisterEmail(data: EmailFormData) {
    const { email } = data;
    try {
      const response = await api.post("register", {
        email
      })
      saveUserData(response.data.user);
      navigate("/list")
    } catch (e) {
      alert("Erro ao registrar")
    }


    reset();
  }

  return (
    <SignupContainer onSubmit={handleSubmit(handleRegisterEmail)}>
      <h1>Formulário de Registro</h1>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu e-mail" {...register('email')} />
      </div>
      <button>Entrar</button>
    </SignupContainer>
  )
}