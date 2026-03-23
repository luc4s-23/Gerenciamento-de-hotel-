import "./LoginUser.css";
import Botao from "../../Components/Botao/Botao";
import { Link } from "react-router-dom";

function LoginUser() {
  return (
    <main className="login-container">
{/* =====================================================BLOCO DE LOGIN================================================= */}

      <section className="area-login">
        <div className="bloco1">
          <h1 className="titulo-login">Login em sua conta</h1>
          <input type="email" className="input-login" placeholder="E-mail ou usuário" />
          <input type="password" className="input-senha" placeholder="Senha" />
          <Botao className={"botao-entrar"} classe={"verde"} children={"Entrar"} />
          <Link className="redefinir-senha" to="/RecuperarSenha"><span>Esqueci minha senha</span></Link>
        
        </div>
      </section>
{/* =====================================================ESPAÇO DA IMAGEM================================================= */}
      <section className="img-exm">
        <div className="hero"></div>
      </section>
    </main>
  );
}

export default LoginUser;
