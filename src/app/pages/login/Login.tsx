//import { useHistory } from "react-router-dom"; para versão do react abaixo da versão 6
//utilização:
//history.push('/pagina')
//import { useNavigate } from "react-router-dom";// versão 6 ou superior

import { useMemo, useState } from "react";

export const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => {
        console.log('executou')
        return email.length *1000;
    },[email.length]);
    
    // Lógica de clique no botão "Entrar"
    const handleEntrar = () => {
        console.log("Email:", email)
        console.log("Senha:", password)
    }

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
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
