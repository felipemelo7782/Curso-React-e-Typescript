//import { useHistory } from "react-router-dom"; para versão do react abaixo da versão 6
//utilização:
//history.push('/pagina')
//import { useNavigate } from "react-router-dom";// versão 6 ou superior

import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
    //const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    // Lógica de clique no botão "Entrar"
    const handleEntrar = useCallback(
        () => {
            console.log("Email:", email)
            console.log("Senha:", password)

        }, [email, password]);



    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                    label="Email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    // onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                    label="Password"
                    type="password"
                    value={password}
                    onChange={newValue => setPassword(newValue)}
                />

                {/* <label>
                    <span>Senha</span>
                    <input
                        ref={inputPasswordRef}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                    />
                </label> */}

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
};
