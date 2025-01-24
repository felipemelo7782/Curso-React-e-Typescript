//import { useHistory } from "react-router-dom"; para versão do react abaixo da versão 6
//utilização:
//history.push('/pagina')
//import { useNavigate } from "react-router-dom";// versão 6 ou superior

import { useEffect, useState } from "react";

export const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        if(window.confirm('Voce é homem?')){
            console.log('homem')
        }else{
            console.log('mulher')
        }
    },[]);

    // Exibe os valores de email e senha sempre que mudarem
    useEffect(() => {
        console.log("Email atualizado:", email);
    }, [email]);
    // Exibe os valores de email e senha sempre que mudarem
    useEffect(() => {
        console.log("Senha atualizada:", password);
    }, [password]);

    // Lógica de clique no botão "Entrar"
    const handleEntrar = () => {
        if (!email || !password) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        console.log("Email:", email);
        console.log("Senha:", password);
        alert("Login realizado com sucesso!");
    };

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    />
                </label>
                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
};
